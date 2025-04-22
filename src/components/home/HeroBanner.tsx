
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Drill, Forklift, Scissors, Truck, Zap, Hammer, Construction, Wrench } from "lucide-react";
import { createWhatsAppLink } from "@/lib/utils";

export function HeroBanner() {
  const whatsappNumber = "5543337238607";
  const whatsappMessage = "Olá! Gostaria de mais informações sobre locação de equipamentos.";
  
  const handleWhatsAppContact = () => {
    const whatsappUrl = createWhatsAppLink(whatsappNumber, whatsappMessage);
    window.open(whatsappUrl, '_blank');
  };

  const categories = [
    { name: "Perfuração e demolição", icon: Drill, href: "/produtos?categoria=furacao-demolicao" },
    { name: "Movimentação e elevação", icon: Forklift, href: "/produtos?categoria=movimentacao-elevacao" },
    { name: "Corte e acabamento", icon: Scissors, href: "/produtos?categoria=corte-acabamento" },
    { name: "Concretagem e mistura", icon: Truck, href: "/produtos?categoria=concretagem-mistura" },
    { name: "Energia", icon: Zap, href: "/produtos?categoria=energia" },
    { name: "Compactação de solo", icon: Hammer, href: "/produtos?categoria=compactacao-solo" },
  ];

  return (
    <section className="relative bg-white h-[30vh] overflow-hidden border-b">
      <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/e890aba0-98bc-4ed4-a68b-24f68fe494db.png')] bg-cover bg-center opacity-5" />
      </div>

      <div className="container h-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-8">
          {/* Left side - Content */}
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Tudo que sua obra precisa está aqui!
            </h1>
            
            <p className="text-base text-gray-600 max-w-xl">
              Mais de 70 tipos de equipamentos profissionais disponíveis para locação. 
              Qualidade e segurança para sua construção.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                <Link to="/produtos">
                  <Construction className="w-5 h-5 mr-2" />
                  Ver Equipamentos
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary/5"
                onClick={handleWhatsAppContact}
              >
                <Wrench className="w-5 h-5 mr-2" />
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Right side - Category Icons */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="aspect-square bg-white shadow-sm border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <category.icon className="w-8 h-8 text-primary" />
                <span className="text-xs text-center font-medium text-gray-600">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
