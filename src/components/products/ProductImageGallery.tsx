
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImageGalleryProps {
  imageUrl: string;
  imageUrl2?: string;
  name: string;
}

export function ProductImageGallery({ imageUrl, imageUrl2, name }: ProductImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [imageError2, setImageError2] = useState(false);

  const images = [
    imageError ? "/placeholder.svg" : imageUrl,
    imageUrl2 && !imageError2 ? imageUrl2 : null
  ].filter(Boolean) as string[];

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageError = (index: number) => {
    if (index === 0) {
      console.log(`Failed to load primary image: ${imageUrl}`);
      setImageError(true);
    } else {
      console.log(`Failed to load secondary image: ${imageUrl2}`);
      setImageError2(true);
    }
  };

  return (
    <div className="relative bg-white rounded-lg overflow-hidden h-[300px] md:h-[400px] border border-gray-200">
      <img 
        src={images[currentImageIndex]} 
        alt={`${name} - Imagem ${currentImageIndex + 1}`} 
        className="w-full h-full object-contain p-4"
        onError={() => handleImageError(currentImageIndex)}
      />
      
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
