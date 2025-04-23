
import React from 'react';

interface CustomCategoryIconProps {
  category: string;
  className?: string;
}

export function CustomCategoryIcon({ category, className = "" }: CustomCategoryIconProps) {
  const getIconPath = () => {
    switch (category.toLowerCase()) {
      case 'andaimes':
      case 'andaimes e acessórios':
        return '/lovable-uploads/f4c745a1-e393-4fda-b020-7243ecfd84c5.png';
      case 'movimentação':
      case 'movimentação e elevação':
        return '/lovable-uploads/a15c98a9-3f34-439d-9dfb-5da87ed63a7f.png';
      case 'compactação':
      case 'compactação de solo':
        return '/lovable-uploads/a15e8f03-4eff-43ea-b1cb-3ebd40f1097b.png';
      case 'concretagem':
      case 'concretagem e mistura':
        return '/lovable-uploads/eb929aea-d855-41b8-8d00-ef8c40f1bf7a.png';
      case 'perfuração':
      case 'furação e demolição':
        return '/lovable-uploads/4c6660af-dc44-4832-9cf7-7d10c1aa9e61.png';
      case 'ferramentas elétricas':
        return '/lovable-uploads/0733f0f0-92ab-45fa-a68a-dab9c07afafd.png';
      case 'jardinagem':
        return '/lovable-uploads/ffe89201-7bd3-459b-b396-77a64db8cf3a.png';
      case 'limpeza':
        return '/lovable-uploads/8e143c89-fa46-49b3-99a2-882a9c24e657.png';
      case 'energia':
        return '/lovable-uploads/81020873-cbce-4c88-b547-c2e8bff08f5b.png';
      case 'escoramento':
        return '/lovable-uploads/d950a6d9-27d7-4850-a25c-c2bdad977c73.png';
      default:
        return '';
    }
  };

  const iconPath = getIconPath();
  
  return iconPath ? (
    <img 
      src={iconPath}
      alt={`Ícone ${category}`}
      className={`h-12 w-12 object-contain ${className}`}
    />
  ) : null;
}
