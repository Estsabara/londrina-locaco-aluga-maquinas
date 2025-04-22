
import React from "react";
import { CategoryCard, CategoryCardProps } from "./CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CategoryTabContentProps {
  categories: CategoryCardProps[];
  onCategorySelect: (category: string) => void;
}

export function CategoryTabContent({ categories, onCategorySelect }: CategoryTabContentProps) {
  const handleCategorySelect = (category: string) => {
    onCategorySelect(category);
  };

  return (
    <div className="relative px-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {categories.map((card, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4 lg:basis-1/6">
              <CategoryCard 
                {...card} 
                onClick={() => handleCategorySelect(card.category)} 
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
}
