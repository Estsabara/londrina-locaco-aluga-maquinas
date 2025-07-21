
import React from "react";
import { CategoryCard } from "./CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { categoryData } from "./categoryData";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";

interface CategoryCarouselProps {
  onCategorySelect: (category: string) => void;
}

export function CategoryCarousel({ onCategorySelect }: CategoryCarouselProps) {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleCategoryClick = (slug: string, name: string) => {
    onCategorySelect(name);
    navigate(`/produtos?categoria=${slug}`);
  };

  return (
    <section className="py-4 md:py-8 w-full overflow-hidden">
      <div className="container px-2 md:px-6">
        <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-center px-2">
          <span className="nordic-title text-nordic-deep">Arsenal de Ferramentas Ancestrais</span>
        </h2>
        
        <div className="relative w-full max-w-full overflow-hidden px-1 sm:px-2 md:px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
              {categoryData.map((card, index) => (
                <CarouselItem key={index} className="pl-1 sm:pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <div className="w-full">
                    <CategoryCard 
                      name={card.name}
                      slug={card.slug}
                      description={card.description}
                      icon={card.icon}
                      onClick={() => handleCategoryClick(card.slug, card.name)} 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 hidden md:flex h-8 w-8 md:h-10 md:w-10" />
            <CarouselNext className="right-0 hidden md:flex h-8 w-8 md:h-10 md:w-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
