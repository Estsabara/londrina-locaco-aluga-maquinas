
import React from "react";
import { FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

interface ImageUploadProps {
  imagePreview: string;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ImageUpload({ imagePreview, onImageChange }: ImageUploadProps) {
  return (
    <div className="space-y-4">
      <FormLabel>Imagem do Produto</FormLabel>
      <div className="flex items-center gap-4">
        {imagePreview && (
          <div className="relative w-24 h-24 rounded-lg overflow-hidden border">
            <img 
              src={imagePreview} 
              alt="Preview" 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <Input
            type="file"
            accept="image/*"
            onChange={onImageChange}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="flex items-center justify-center w-full px-4 py-2 text-sm border rounded-md cursor-pointer hover:bg-muted"
          >
            <Upload className="w-4 h-4 mr-2" />
            Escolher imagem
          </label>
        </div>
      </div>
    </div>
  );
}
