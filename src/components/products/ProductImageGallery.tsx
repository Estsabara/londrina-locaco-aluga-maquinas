
import React, { useState } from "react";

interface ProductImageGalleryProps {
  imageUrl: string;
  name: string;
}

export function ProductImageGallery({ imageUrl, name }: ProductImageGalleryProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.log(`Erro ao carregar imagem: ${imageUrl}`);
    setImageError(true);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden h-[300px] md:h-[400px] border border-gray-200">
      <img 
        src={imageError ? "/placeholder.svg" : imageUrl} 
        alt={name} 
        className="w-full h-full object-contain p-4"
        onError={handleImageError}
      />
    </div>
  );
}
