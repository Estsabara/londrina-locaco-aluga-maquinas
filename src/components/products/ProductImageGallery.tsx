
import React, { useState, useEffect } from "react";
import { processImageUrl } from "@/lib/image-utils";

interface ProductImageGalleryProps {
  imageUrl: string;
  name: string;
}

export function ProductImageGallery({ imageUrl, name }: ProductImageGalleryProps) {
  const [imageError, setImageError] = useState(false);
  // Store the initial image URL to prevent changing it unexpectedly
  const [stableImageUrl, setStableImageUrl] = useState(imageUrl);

  // Update stable URL only once when component mounts
  useEffect(() => {
    setStableImageUrl(imageUrl);
  }, [imageUrl]); // Update if imageUrl changes

  const handleImageError = () => {
    console.log(`Erro ao carregar imagem: ${imageUrl}`);
    setImageError(true);
  };

  // Use consistent image processing
  const displayUrl = imageError ? "/placeholder.svg" : processImageUrl(stableImageUrl);

  return (
    <div className="bg-white rounded-lg overflow-hidden h-[300px] md:h-[400px] border border-gray-200">
      <img 
        src={displayUrl} 
        alt={name} 
        className="w-full h-full object-contain p-4"
        onError={handleImageError}
      />
    </div>
  );
}
