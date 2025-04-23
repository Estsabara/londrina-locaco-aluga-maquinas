
import { LucideIcon } from "lucide-react";
import React from "react";

export interface CategoryCardProps {
  name: string;
  icon: LucideIcon | (() => React.ReactElement);
  color: string;
  category: string;
  onClick?: () => void;
}

export function CategoryCard({ name, icon: Icon, onClick }: CategoryCardProps) {
  return (
    <div 
      className="category-card bg-primary rounded-lg cursor-pointer flex flex-col items-center justify-center p-1 md:p-3 h-[80px] md:h-[120px] w-full transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="mb-1 md:mb-2">
        {typeof Icon === "function" && !Icon.hasOwnProperty("$$typeof") ? (
          Icon()
        ) : (
          // @ts-ignore - We know Icon is a LucideIcon here
          <Icon className="h-4 w-4 md:h-6 md:w-6 text-white" />
        )}
      </div>
      <span className="text-center text-white text-[9px] md:text-xs font-medium line-clamp-2 px-1">{name}</span>
    </div>
  );
}
