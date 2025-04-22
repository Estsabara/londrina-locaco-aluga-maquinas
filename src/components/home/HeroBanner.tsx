
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Construction, Wrench, Drill, Forklift, Truck } from "lucide-react";
import { createWhatsAppLink } from "@/lib/utils";

export function HeroBanner() {
  const isMobile = useIsMobile();
  const whatsappNumber = "5543337238607";
  const whatsappMessage = "Olá! Gostaria de mais informações sobre locação de equipamentos.";
  
  const handleWhatsAppContact = () => {
    const whatsappUrl = createWhatsAppLink(whatsappNumber, whatsappMessage);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative bg-primary h-[50vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/e890aba0-98bc-4ed4-a68b-24f68fe494db.png')] bg-cover bg-center opacity-10" />
      </div>

      <div className="container h-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center gap-8">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Tudo que sua obra precisa está aqui!
            </h1>
            
            <p className="text-lg text-gray-200 max-w-xl">
              Mais de 70 tipos de equipamentos profissionais disponíveis para locação. 
              Qualidade e segurança para sua construção.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white hover:bg-white/90 text-primary font-semibold">
                <Link to="/produtos">
                  <Construction className="w-5 h-5 mr-2" />
                  Ver Equipamentos
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent hover:bg-white/10 text-white border-white"
                onClick={handleWhatsAppContact}
              >
                <Wrench className="w-5 h-5 mr-2" />
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Right side - Category Buttons */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            <CategoryButton icon={Drill} label="Furação e Demolição" href="/produtos?categoria=furacao-demolicao" />
            <CategoryButton icon={Forklift} label="Movimentação" href="/produtos?categoria=movimentacao-elevacao" />
            <CategoryButton icon={Truck} label="Concretagem" href="/produtos?categoria=concretagem-mistura" />
            <CategoryButton icon={Construction} label="Outros" href="/produtos" />
          </div>
        </div>
      </div>
    </section>
  );
}

interface CategoryButtonProps {
  icon: React.ElementType;
  label: string;
  href: string;
}

function CategoryButton({ icon: Icon, label, href }: CategoryButtonProps) {
  return (
    <Link 
      to={href}
      className="flex flex-col items-center justify-center p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
    >
      <Icon className="w-8 h-8 mb-2" />
      <span className="text-sm font-medium text-center">{label}</span>
    </Link>
  );
}
