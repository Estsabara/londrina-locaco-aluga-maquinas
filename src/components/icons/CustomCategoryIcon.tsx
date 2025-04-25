
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
        return '/lovable-uploads/27864eea-0e5f-41b3-88ac-9924e30d518f.png';
      case 'acesso e elevação':
        return '/lovable-uploads/a7db7c69-2277-463c-8a2e-512014690f7e.png';
      case 'compactação':
        return '/lovable-uploads/ddd81629-440f-46df-935f-a1ab6f9a253d.png';
      case 'concretagem':
        return '/lovable-uploads/74455a9f-1483-420d-a15b-568d30d1447c.png';
      case 'jardinagem':
        return '/lovable-uploads/528495f1-e3c8-44d9-8f2e-3241f6a4bb04.png';
      case 'ferramentas elétricas':
        return '/lovable-uploads/7faa5e74-9a6f-4883-9a96-3d1b3f244f74.png';
      case 'limpeza':
        return '/lovable-uploads/1dadfa90-188e-42c0-93b2-58f4e50b366a.png';
      case 'motores':
        return '/lovable-uploads/07aab077-f8da-4695-b82e-2d9484fa0c49.png';
      case 'escoramentos':
        return '/lovable-uploads/5994ddf5-e8ae-4a44-b4d7-a34be579eeb9.png';
      case 'perfuração':
        return '/lovable-uploads/799da723-30cb-415d-9f19-f8cc007e4007.png';
      case 'geradores':
        return '/lovable-uploads/d6d2aef2-5515-48c0-a01b-aa5636bb3d73.png';
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
        color="#FF7F00"
        strokeWidth={2}
      />
    </div>
  );
}
