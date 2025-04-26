
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import { CustomCategoryIcon } from "../icons/CustomCategoryIcon";

export interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  onClick?: () => void;
}

export function CategoryCard({
  name,
  slug,
  description,
  icon: Icon,
  className = "",
  onClick,
}: CategoryCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Link to={`/produtos?categoria=${slug}`} onClick={handleClick}>
      <Card className={`w-full min-h-[250px] h-full transition-transform hover:scale-105 bg-white border border-gray-200 ${className}`}>
        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
          <CustomCategoryIcon category={name} className="mb-4" />
          <h3 className="text-lg font-medium mb-2 text-[#e66722]">{name}</h3>
          <p className="text-sm text-muted-foreground text-[#ff0000]">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
