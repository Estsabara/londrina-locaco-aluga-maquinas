
import React from 'react';
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ImageIcon, Upload } from "lucide-react";

interface ImageUploadProps {
  imagePreview: string;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ImageUpload({ imagePreview, onImageChange }: ImageUploadProps) {
  return (
    <div className="space-y-4">
      <FormLabel>Imagem do Produto</FormLabel>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input 
            id="image" 
            type="file" 
            onChange={onImageChange} 
            accept="image/*"
            className="cursor-pointer"
          />
          <p className="text-sm text-muted-foreground mt-1">
            Formato recomendado: JPG, PNG. Tamanho máximo: 5MB
          </p>
        </div>
        
        <div className="flex items-center justify-center">
          {imagePreview ? (
            <Card className="overflow-hidden w-40 h-40 flex items-center justify-center">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="w-full h-full object-cover"
              />
            </Card>
          ) : (
            <Card className="w-40 h-40 flex flex-col items-center justify-center text-muted-foreground">
              <ImageIcon className="w-10 h-10 mb-2" />
              <span>Sem imagem</span>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
