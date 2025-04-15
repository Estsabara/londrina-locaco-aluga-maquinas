
import React from "react";
import { CategoryCard, CategoryCardProps } from "./CategoryCard";

interface CategoryTabContentProps {
  categories: CategoryCardProps[];
  onCategorySelect: (category: string) => void;
}

export function CategoryTabContent({ categories, onCategorySelect }: CategoryTabContentProps) {
  const handleCategorySelect = (category: string) => {
    onCategorySelect(category);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {categories.map((card, index) => (
        <CategoryCard 
          key={index} 
          {...card} 
          onClick={() => handleCategorySelect(card.category)} 
        />
      ))}
    </div>
  );
}
