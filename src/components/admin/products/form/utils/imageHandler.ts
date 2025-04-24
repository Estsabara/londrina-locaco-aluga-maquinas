
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const validateImage = (file: File): boolean => {
  // Verificar tamanho do arquivo (5MB máximo)
  if (file.size > 5 * 1024 * 1024) {
    toast.error("O tamanho máximo da imagem é 5MB");
    return false;
  }
  
  // Verificar tipo de arquivo
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (!allowedTypes.includes(file.type)) {
    toast.error("Apenas imagens JPG, PNG ou WebP são permitidas");
    return false;
  }
  
  return true;
};

export const uploadImage = async (file: File): Promise<string> => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    
    const { error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      throw new Error('Erro ao fazer upload da imagem');
    }
    
    const { data: { publicUrl } } = supabase.storage
      .from('product-images')
      .getPublicUrl(fileName);
      
    return publicUrl;
  } catch (error) {
    console.error('Image upload error:', error);
    throw error;
  }
};
