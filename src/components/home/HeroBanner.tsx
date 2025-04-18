
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Hammer, HardHat, Construction } from "lucide-react";

export function HeroBanner() {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 border-b">
      <div className="container px-4 py-12 md:py-24 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Construction className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold">Londrina Locações</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Equipamentos para sua obra
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Mais de 70 tipos de equipamentos profissionais disponíveis para locação. 
              Qualidade e segurança para sua construção.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold gap-2"
              >
                <Link to="/produtos">
                  <Hammer className="w-5 h-5" />
                  Ver Equipamentos
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Link to="/contato">
                  <HardHat className="w-5 h-5" />
                  Fale Conosco
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative mx-auto lg:ml-auto w-full max-w-2xl">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-2xl">
              <img 
                src="/lovable-uploads/e890aba0-98bc-4ed4-a68b-24f68fe494db.png"
                alt="Equipamentos de construção"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
