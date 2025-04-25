
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
      case 'acesso e elevação':
        return '/lovable-uploads/f7c8ee6a-46a5-484a-b2eb-8cdad9ae0cd1.png';
      case 'andaimes':
        return '/lovable-uploads/3ce14fe2-4ad5-4831-8077-5235d0e1e7f3.png';
      case 'compactação':
        return '/lovable-uploads/beb9ead4-d86e-4baf-93da-2eb47633f3b5.png';
      case 'concretagem':
        return '/lovable-uploads/e82f9699-ea35-4785-ba4a-f10ee8833ec4.png';
      case 'escoramentos':
        return '/lovable-uploads/4f42c94d-37e0-4d12-aca6-839fe9a8b617.png';
      case 'ferramentas elétricas':
        return '/lovable-uploads/c1cba62e-959b-474f-b465-88c313cfea04.png';
      case 'jardinagem':
        return '/lovable-uploads/aa88e866-0c19-4508-a924-cd5e872ad5b8.png';
      case 'limpeza':
        return '/lovable-uploads/42c78cd7-4c35-4deb-9397-446640d46762.png';
      case 'motores':
        return '/lovable-uploads/deb08805-cdd2-4722-b7ee-db6ff996d02b.png';
      case 'perfuração':
        return '/lovable-uploads/4bab052c-6e85-4ce2-a0fb-ab43e16408e1.png';
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
