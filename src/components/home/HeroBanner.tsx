import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Drill, Forklift, Scissors, Truck, Zap, Hammer } from "lucide-react";
export function HeroBanner() {
  const categories = [{
    name: "Perfuração e demolição",
    icon: Drill,
    href: "/produtos?categoria=furacao-demolicao"
  }, {
    name: "Movimentação e elevação",
    icon: Forklift,
    href: "/produtos?categoria=movimentacao-elevacao"
  }, {
    name: "Corte e acabamento",
    icon: Scissors,
    href: "/produtos?categoria=corte-acabamento"
  }, {
    name: "Concretagem e mistura",
    icon: Truck,
    href: "/produtos?categoria=concretagem-mistura"
  }, {
    name: "Energia",
    icon: Zap,
    href: "/produtos?categoria=energia"
  }, {
    name: "Compactação de solo",
    icon: Hammer,
    href: "/produtos?categoria=compactacao-solo"
  }];
  return <section className="relative bg-white border-b h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/e890aba0-98bc-4ed4-a68b-24f68fe494db.png')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 py-8 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full relative z-10">
          {/* Left side - Title */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4 md:text-5xl">Alugue Equipamentos para sua Obra</h1>
            <p className="text-gray-600 text-xl">
              Mais de 70 tipos de equipamentos profissionais disponíveis para locação.
            </p>
          </div>

          {/* Right side - Category Icons */}
          <div className="grid grid-cols-3 gap-4">
            {categories.map(category => <Link key={category.name} to={category.href} className="flex flex-col items-center justify-center p-4 rounded-lg bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors text-center">
                <category.icon className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm text-gray-600 font-medium line-clamp-2">
                  {category.name}
                </span>
              </Link>)}
          </div>
        </div>
      </div>
    </section>;
}