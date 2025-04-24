
import React from 'react';
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ImageIcon, Upload, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ImageUploadProps {
  imagePreview: string;
  imagePreview2: string;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>, imageNumber: 1 | 2) => void;
}

export function ImageUpload({ imagePreview, imagePreview2, onImageChange }: ImageUploadProps) {
  return (
    <div className="space-y-4">
      <FormLabel>Imagens do Produto</FormLabel>
      
      <Alert variant="default" className="bg-muted/50 mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          As imagens devem ter no máximo 5MB e estar nos formatos JPG ou PNG.
        </AlertDescription>
      </Alert>
      
      <div className="grid grid-cols-1 gap-6">
        {/* First Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <FormLabel>Imagem Principal</FormLabel>
            <div className="relative">
              <Input 
                id="image1" 
                type="file" 
                onChange={(e) => onImageChange(e, 1)} 
                accept="image/*"
                className="cursor-pointer"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Upload className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            {imagePreview ? (
              <Card className="overflow-hidden w-40 h-40 flex items-center justify-center">
                <img 
                  src={imagePreview} 
                  alt="Preview 1" 
                  className="w-full h-full object-cover"
                />
              </Card>
            ) : (
              <Card className="w-40 h-40 flex flex-col items-center justify-center text-muted-foreground">
                <ImageIcon className="w-10 h-10 mb-2" />
                <span>Imagem Principal</span>
              </Card>
            )}
          </div>
        </div>

        {/* Second Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <FormLabel>Imagem Secundária</FormLabel>
            <div className="relative">
              <Input 
                id="image2" 
                type="file" 
                onChange={(e) => onImageChange(e, 2)} 
                accept="image/*"
                className="cursor-pointer"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Upload className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            {imagePreview2 ? (
              <Card className="overflow-hidden w-40 h-40 flex items-center justify-center">
                <img 
                  src={imagePreview2} 
                  alt="Preview 2" 
                  className="w-full h-full object-cover"
                />
              </Card>
            ) : (
              <Card className="w-40 h-40 flex flex-col items-center justify-center text-muted-foreground">
                <ImageIcon className="w-10 h-10 mb-2" />
                <span>Imagem Secundária</span>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
