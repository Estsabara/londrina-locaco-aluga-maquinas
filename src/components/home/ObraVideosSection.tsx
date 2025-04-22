
import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, UploadCloud, Video } from "lucide-react";

interface ObraVideo {
  id: string;
  title: string;
  url: string;
  order_number: number;
}

export function ObraVideosSection() {
  const [videos, setVideos] = useState<ObraVideo[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [orderNumber, setOrderNumber] = useState<number|''>('');
  const [error, setError] = useState<string | null>(null);

  // Fetch all videos
  const fetchVideos = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("obra_videos")
      .select("*")
      .order("order_number", { ascending: true });
    if (!error) setVideos(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // Upload video to bucket and insert entry in obra_videos
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!selectedFile || !title || !orderNumber) {
      setError("Preencha todos os campos e selecione um vídeo.");
      return;
    }

    // Limit to 14 videos
    if (videos.length >= 14) {
      setError("Limite de 14 vídeos atingido.");
      return;
    }

    try {
      setUploading(true);

      const fileExt = selectedFile.name.split('.').pop();
      const filePath = `${Date.now()}_${selectedFile.name}`;

      // Upload to Supabase Storage
      const { data: upData, error: uploadErr } = await supabase
        .storage
        .from("obra-videos")
        .upload(filePath, selectedFile);

      if (uploadErr) {
        setError("Erro ao enviar vídeo: " + uploadErr.message);
        setUploading(false);
        return;
      }

      // Get public URL
      const { data: pubUrl } = supabase
        .storage
        .from("obra-videos")
        .getPublicUrl(filePath);

      // Insert in obra_videos table
      const { error: insertErr } = await supabase
        .from("obra_videos")
        .insert({
          title,
          url: pubUrl?.publicUrl,
          order_number: orderNumber,
        });

      if (insertErr) {
        setError("Erro ao salvar no banco de dados: " + insertErr.message);
      } else {
        setTitle("");
        setOrderNumber("");
        setSelectedFile(null);
        fetchVideos();
      }
    } catch (err: any) {
      setError("Erro ao enviar: " + (err.message || "erro desconhecido"));
    }
    setUploading(false);
  };

  return (
    <section className="py-10 bg-white border-b">
      <div className="container max-w-2xl mx-auto px-4 flex flex-col gap-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
          <Video className="w-8 h-8 text-primary" /> Vídeos da Obra
        </h2>

        {/* Uploader */}
        <form onSubmit={handleUpload} className="flex flex-col md:flex-row gap-4 items-center bg-gray-50 rounded-lg p-4 border">
          <Input
            type="text"
            placeholder="Título do vídeo"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="max-w-xs"
            required
            disabled={uploading}
          />
          <Input
            type="number"
            placeholder="Ordem (1-14)"
            min={1}
            max={14}
            value={orderNumber}
            onChange={e => setOrderNumber(Number(e.target.value))}
            className="w-24"
            required
            disabled={uploading}
          />
          <Input
            type="file"
            accept="video/*"
            onChange={e => setSelectedFile(e.target.files?.[0] || null)}
            className="max-w-xs"
            disabled={uploading}
          />
          <Button type="submit" disabled={uploading || loading}>
            {uploading ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : <UploadCloud className="w-4 h-4 mr-2" />}
            Enviar vídeo
          </Button>
        </form>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {loading ? (
            <div className="col-span-2 flex justify-center py-10">
              <Loader2 className="animate-spin w-8 h-8 text-primary" />
            </div>
          ) : (
            videos.length === 0 ? (
              <div className="col-span-2 text-center text-gray-500 py-8">
                Nenhum vídeo enviado ainda.
              </div>
            ) : (
              videos.map(video => (
                <div key={video.id} className="bg-black rounded-lg shadow-md overflow-hidden">
                  <video controls className="w-full h-64 bg-black" src={video.url} poster="" preload="metadata" />
                  <div className="p-3 text-white bg-black/90">
                    <div className="font-semibold text-base">{video.title}</div>
                    <div className="text-xs text-gray-200">Vídeo #{video.order_number}</div>
                  </div>
                </div>
              ))
            )
          )}
        </div>
      </div>
    </section>
  );
}

