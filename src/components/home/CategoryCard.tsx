
import { LucideIcon } from "lucide-react";

export interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  color: string;
  category: string;
  onClick?: () => void;
}

export function CategoryCard({ name, icon: Icon, onClick }: CategoryCardProps) {
  return (
    <div 
      className="category-card bg-primary rounded-lg cursor-pointer flex flex-col items-center justify-center p-2 md:p-3 h-[100px] md:h-[120px]"
      onClick={onClick}
    >
      <div className="mb-1 md:mb-2">
        <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
      </div>
      <span className="text-center text-white text-[10px] md:text-xs font-medium line-clamp-2">{name}</span>
    </div>
  );
}
