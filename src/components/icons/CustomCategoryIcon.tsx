
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
        return '/lovable-uploads/55fcb8ae-a8c5-4739-aab8-2df59f5fd252.png';
      case 'acesso e elevação':
        return '/lovable-uploads/9aacfdfa-6326-487a-93c6-2a5db5d466e7.png';
      case 'compactação':
        return '/lovable-uploads/496f7ff0-cfd9-4b7f-a618-ec499be35e4e.png';
      case 'concretagem':
        return '/lovable-uploads/ce5204fb-46eb-4ae1-bb4f-f4ea10decc33.png';
      case 'jardinagem':
        return '/lovable-uploads/122e2e33-db18-4741-8720-7b0608e9196a.png';
      case 'ferramentas elétricas':
        return '/lovable-uploads/952b267b-c852-43fa-99f1-7c25afa26bd5.png';
      case 'limpeza':
        return '/lovable-uploads/03961ce9-f203-4b21-8d58-be6e72ebf525.png';
      case 'motores':
        return '/lovable-uploads/41e445cb-c6be-4249-b33a-ef009dc6a0c1.png';
      case 'escoramentos':
        return '/lovable-uploads/bba1d8f0-8be5-41df-a679-2b465d25ef51.png';
      case 'perfuração':
        return '/lovable-uploads/248d9477-284c-4fe8-b4c1-1dfc09a5f0f2.png';
      default:
        console.log('Category icon not found:', category);
        return null;
    }
  };

  const iconPath = getIconPath();
  
  if (iconPath) {
    return (
      <div className="flex items-center justify-center">
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
    <div className="flex items-center justify-center">
      <Wrench 
        className={`h-12 w-12 ${className}`}
      />
    </div>
  );
}
