
import React from 'react';
import { Wrench } from 'lucide-react';

interface CustomCategoryIconProps {
  category: string;
  className?: string;
}

export function CustomCategoryIcon({ category, className = "" }: CustomCategoryIconProps) {
  const getIconPath = () => {
    const normalizedCategory = category.toLowerCase().trim();
    
    switch (normalizedCategory) {
      case 'andaimes':
        return '/lovable-uploads/836b98ad-ba9a-407f-b6bc-8134f878b7d8.png';
      case 'acesso e elevação':
        return '/lovable-uploads/f2eea06a-186a-4cb6-b9b0-fdce6ee8cb04.png';
      case 'compactação':
        return '/lovable-uploads/2d083810-7019-472a-87ec-66af8d51b11b.png';
      case 'concretagem':
        return '/lovable-uploads/6da3af5c-6e69-48aa-b1ab-ba9ec6b26daf.png';
      case 'jardinagem':
        return '/lovable-uploads/35520990-a7d1-4438-b992-51fb5dbc3a38.png';
      case 'ferramentas elétricas':
        return '/lovable-uploads/72cf8895-3baa-44dd-bfe3-3ff4ba54b5fa.png';
      case 'limpeza':
        return '/lovable-uploads/2bd10752-8b9d-4db6-a157-197c47ae596c.png';
      case 'motores':
        return '/lovable-uploads/8018b07b-9771-47a4-8eb0-36b34f16f546.png';
      case 'escoramentos':
        return '/lovable-uploads/aad19f97-574c-4505-87cc-5a3ee838a610.png';
      default:
        console.log('Category icon not found:', category);
        return null;
    }
  };

  const iconPath = getIconPath();
  
  if (iconPath) {
    return (
      <div className="bg-white rounded-lg p-4">
        <img 
          src={iconPath}
          alt={`Ícone ${category}`}
          className={`h-12 w-12 object-contain ${className}`}
          onError={(e) => {
            console.error(`Failed to load icon for category: ${category}`);
            e.currentTarget.onerror = null;
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg p-4">
      <Wrench 
        className={`h-12 w-12 text-[#FF7F00] ${className}`} 
        color="#FF7F00"  // Explicitly set color
        strokeWidth={2}   // Ensure consistent stroke width
      />
    </div>
  );
}
