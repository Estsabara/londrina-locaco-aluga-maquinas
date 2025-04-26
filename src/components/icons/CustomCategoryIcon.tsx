
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
        return '/lovable-uploads/andaime.png';
      case 'acesso e elevação':
        return '/lovable-uploads/acesso_elevacao.png';
      case 'compactação':
        return '/lovable-uploads/compactacao.png';
      case 'concretagem':
        return '/lovable-uploads/concretagem.png';
      case 'jardinagem':
        return '/lovable-uploads/jardinagem.png';
      case 'ferramentas elétricas':
        return '/lovable-uploads/ferramentas_eletricas.png';
      case 'limpeza':
        return '/lovable-uploads/limpeza.png';
      case 'motores':
        return '/lovable-uploads/motores.png';
      case 'escoramentos':
        return '/lovable-uploads/escoramentos.png';
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
          className={`h-16 w-16 object-contain ${className}`}
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
      <Wrench className={`h-12 w-12 text-[#ff3200] ${className}`} />
    </div>
  );
}

