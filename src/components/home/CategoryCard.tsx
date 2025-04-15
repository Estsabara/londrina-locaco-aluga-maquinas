
import { LucideIcon } from "lucide-react";

export interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  color: string;
  category: string;
  onClick?: () => void;
}

export function CategoryCard({ name, icon: Icon, color, onClick }: CategoryCardProps) {
  return (
    <div 
      className="category-card bg-primary rounded-2xl cursor-pointer flex flex-col items-center justify-center p-4 aspect-square"
      onClick={onClick}
    >
      <div className="mb-2">
        <Icon className="h-8 w-8 text-yellow-400" />
      </div>
      <span className="text-center text-white text-sm font-medium">{name}</span>
    </div>
  );
}
