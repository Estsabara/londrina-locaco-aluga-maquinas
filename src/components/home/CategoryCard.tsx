
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
      className="category-card bg-secondary rounded-2xl cursor-pointer"
      onClick={onClick}
    >
      <div className="category-card-icon bg-primary">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <span className="text-center text-white text-sm font-medium">{name}</span>
    </div>
  );
}
