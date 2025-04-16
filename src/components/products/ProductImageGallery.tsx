
import React, { useState } from "react";

interface ProductImageGalleryProps {
  imageUrl: string;
  name: string;
}

export function ProductImageGallery({ imageUrl, name }: ProductImageGalleryProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-muted rounded-lg overflow-hidden h-[300px] md:h-[400px]">
      <img 
        src={imageError ? "/placeholder.svg" : imageUrl} 
        alt={name} 
        className="w-full h-full object-contain"
        onError={() => setImageError(true)}
      />
    </div>
  );
}
