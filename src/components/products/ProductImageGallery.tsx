
import React from "react";

interface ProductImageGalleryProps {
  imageUrl: string;
  name: string;
}

export function ProductImageGallery({ imageUrl, name }: ProductImageGalleryProps) {
  return (
    <div className="bg-muted rounded-lg overflow-hidden h-[300px] md:h-[400px]">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "/placeholder.svg";
        }}
      />
    </div>
  );
}
