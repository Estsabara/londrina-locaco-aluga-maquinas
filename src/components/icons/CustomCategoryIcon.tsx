
import React from 'react';
import { Wrench } from 'lucide-react';

interface CustomCategoryIconProps {
  category: string;
  className?: string;
}

export function CustomCategoryIcon({ category, className = "" }: CustomCategoryIconProps) {
  const getIconPath = () => {
    // Standardize the category name for comparison
    const normalizedCategory = category.toLowerCase().trim();
    
    switch (normalizedCategory) {
      case 'andaimes':
      case 'andaimes e acessórios':
      case 'escoramento':
        return '/lovable-uploads/82dcf392-c5a3-4f8c-9779-f93923681504.png';
      case 'movimentação':
      case 'movimentação e elevação':
      case 'acesso e elevação':
      case 'acesso':
      case 'elevação':
        return '/lovable-uploads/dd6dba73-e970-42d1-9fb0-14f436794ac2.png';
      case 'compactação':
      case 'compactação de solo':
        return '/lovable-uploads/88052ce2-85e6-431e-a6ee-4106e866bd37.png';
      case 'concretagem':
      case 'concretagem e mistura':
        return '/lovable-uploads/e17683f7-5286-4f73-9126-b8fb48e4ac76.png';
      case 'perfuração':
      case 'furação e demolição':
      case 'furação':
      case 'demolição':
        return '/lovable-uploads/8d1e72c9-18c7-4138-ab3f-6f44e25000df.png';
      case 'ferramentas elétricas':
      case 'ferramentas':
      case 'elétricas':
      case 'corte e acabamento':
        return '/lovable-uploads/8c7998cf-5af5-4ebf-9588-d084a393afb7.png';
      case 'jardinagem':
        return '/lovable-uploads/8bdf958f-5ea9-44b8-ba09-74f5483df733.png';
      case 'limpeza':
        return '/lovable-uploads/4012597a-d28c-4c10-8b6e-1ab7fb50ebcc.png';
      case 'energia':
        return '/lovable-uploads/c0a5aeb7-4fac-4a12-a5eb-843cb6bf787c.png';
      case 'equipamentos diversos':
      case 'outros':
        return '/lovable-uploads/d8d5a42b-015d-4a36-8e5e-1a2d0ab45e24.png';
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
  
  // Fallback to a generic icon
  return <Wrench className={`h-12 w-12 text-primary ${className}`} />;
}
