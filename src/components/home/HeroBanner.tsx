
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Drill, Forklift, Scissors, Truck, Zap, Hammer } from "lucide-react";

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
    <section className="relative bg-white border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Title */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Equipamentos e ferramentas para locação
            </h1>
            <p className="text-gray-600">
              Mais de 70 tipos de equipamentos profissionais disponíveis para locação.
            </p>
          </div>

          {/* Right side - Category Icons */}
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-colors text-center"
              >
                <category.icon className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs text-gray-600 font-medium line-clamp-2">
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
