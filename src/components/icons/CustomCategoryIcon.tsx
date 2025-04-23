
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
      case 'andaimes e escoramentos':
        return '/lovable-uploads/8a42e7a3-7dde-417b-bcca-e96aeeacf321.png';
      case 'movimentação':
      case 'movimentação e elevação':
        return '/lovable-uploads/1be950ff-c87d-46f3-b556-7c4dec5faf4f.png';
      case 'compactação':
        return '/lovable-uploads/bdf3980a-911f-45bd-8773-6f15f75fafc7.png';
      case 'concretagem':
        return '/lovable-uploads/1aa47e43-5bfc-4e2e-855a-915e09d1487d.png';
      case 'ferramentas elétricas':
        return '/lovable-uploads/42f43d78-811a-45b0-aef8-37d28f26c361.png';
      case 'jardinagem':
        return '/lovable-uploads/ac1f61ab-9719-4533-8656-9355d287a08c.png';
      case 'limpeza':
        return '/lovable-uploads/51453ff4-ed62-478d-a31c-d731846ee36c.png';
      case 'perfuração':
      case 'perfuração e demolição':
        return '/lovable-uploads/6f78b3f2-beb6-4873-9151-9f69b928b28d.png';
      case 'energia':
        return '/lovable-uploads/62aa2cf7-22c9-4d58-b672-93d9c61a73f8.png';
      case 'escoramentos':
        return '/lovable-uploads/a6ec0873-df8a-4e65-943a-dc508c17430f.png';
      default:
        console.log('Category icon not found:', category);
        return null;
    }
  };

  const iconPath = getIconPath();
  
  if (iconPath) {
    return (
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
    );
  }
  
  return <Wrench className={`h-12 w-12 text-primary ${className}`} />;
}
