
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Hammer, HardHat, Construction } from "lucide-react";

export function HeroBanner() {
  const isMobile = useIsMobile();
  return <section className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('/lovable-uploads/equipment-mobile-bg.png')"
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for better text readability */}
      </div>

      {/* Content */}
      <div className="relative h-full container px-4 mx-auto">
        <div className="h-full flex items-center">
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">Alugue Equipamentos para sua obra</h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
              Mais de 70 tipos de equipamentos profissionais disponíveis para locação. 
              Qualidade e segurança para sua construção.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold gap-2">
                <Link to="/produtos">
                  <Hammer className="w-5 h-5" />
                  Ver Equipamentos
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 bg-white/10 hover:bg-white/20 text-white border-white">
                <Link to="/contato">
                  <HardHat className="w-5 h-5" />
                  Fale Conosco
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
