import { Link } from "react-router-dom";
import { 
  Construction, 
  Drill,
  Hammer,
  HardHat,
  Building,
  Factory
} from "lucide-react";

export function HeroBanner() {
  const categories = [{
    name: "Perfuração e demolição",
    icon: Drill,
    href: "/produtos?categoria=furacao-demolicao"
  }, {
    name: "Movimentação e elevação",
    icon: Factory,
    href: "/produtos?categoria=movimentacao-elevacao"
  }, {
    name: "Corte e acabamento",
    icon: Construction,
    href: "/produtos?categoria=corte-acabamento"
  }, {
    name: "Concretagem e mistura",
    icon: Building,
    href: "/produtos?categoria=concretagem-mistura"
  }, {
    name: "Energia",
    icon: HardHat,
    href: "/produtos?categoria=energia"
  }, {
    name: "Compactação de solo",
    icon: Hammer,
    href: "/produtos?categoria=compactacao-solo"
  }];

  return (
    <section className="relative bg-black border-b min-h-[400px] md:h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/e890aba0-98bc-4ed4-a68b-24f68fe494db.png')] bg-cover bg-center opacity-20" />
      
      <div className="container mx-auto px-4 py-8 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full relative z-10">
          {/* Left side - Title */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight" 
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              Alugue Equipamentos para sua Obra
            </h1>
            <p className="text-gray-300 text-base md:text-xl">
              Mais de 70 tipos de equipamentos profissionais disponíveis para locação.
            </p>
          </div>

          {/* Right side - Category Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-6">
            {categories.map(category => (
              <Link 
                key={category.name} 
                to={category.href} 
                className="flex flex-col items-center justify-center p-3 md:p-6 rounded-lg bg-primary shadow-lg border-2 border-primary hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group"
              >
                <category.icon 
                  className="w-8 h-8 md:w-16 md:h-16 text-white mb-2 md:mb-4 group-hover:text-white/90 transition-colors" 
                  strokeWidth={1.5}
                />
                <span className="text-xs md:text-sm text-white font-medium line-clamp-2 text-center group-hover:text-white/90">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
