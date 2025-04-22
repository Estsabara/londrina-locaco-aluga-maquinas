
import { Link } from "react-router-dom";
import { Drill, Forklift, Scissors, Truck, Zap, Hammer } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function HeroBanner() {
  const categories = [
    { name: "Perfuração e demolição", icon: Drill, href: "/produtos?categoria=furacao-demolicao" },
    { name: "Movimentação e elevação", icon: Forklift, href: "/produtos?categoria=movimentacao-elevacao" },
    { name: "Corte e acabamento", icon: Scissors, href: "/produtos?categoria=corte-acabamento" },
    { name: "Concretagem e mistura", icon: Truck, href: "/produtos?categoria=concretagem-mistura" },
    { name: "Energia", icon: Zap, href: "/produtos?categoria=energia" },
    { name: "Compactação de solo", icon: Hammer, href: "/produtos?categoria=compactacao-solo" },
  ];

  return (
    <section className="relative bg-white border-b h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/e890aba0-98bc-4ed4-a68b-24f68fe494db.png')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 py-8 h-full">
        <div className="flex flex-col h-full relative z-10 gap-8">
          {/* Title */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Equipamentos e ferramentas para locação
            </h1>
            <p className="text-gray-600 text-lg">
              Mais de 70 tipos de equipamentos profissionais disponíveis para locação.
            </p>
          </div>

          {/* Category Icons Carousel */}
          <div className="w-full px-8 relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {categories.map((category) => (
                  <CarouselItem key={category.name} className="pl-2 md:pl-4 basis-1/4 md:basis-1/6">
                    <Link
                      to={category.href}
                      className="flex flex-col items-center justify-center p-3 rounded-lg bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors text-center h-24"
                    >
                      <category.icon className="w-6 h-6 text-primary mb-2" />
                      <span className="text-xs text-gray-600 font-medium line-clamp-2">
                        {category.name}
                      </span>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
