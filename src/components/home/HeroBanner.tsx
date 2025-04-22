
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Construction, Wrench, Drill, Forklift, Truck, Menu } from "lucide-react";
import { createWhatsAppLink } from "@/lib/utils";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function HeroBanner() {
  const isMobile = useIsMobile();
  const whatsappNumber = "5543337238607";
  const whatsappMessage = "Olá! Gostaria de mais informações sobre locação de equipamentos.";
  
  const handleWhatsAppContact = () => {
    const whatsappUrl = createWhatsAppLink(whatsappNumber, whatsappMessage);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative bg-white h-[40vh] overflow-hidden border-b">
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

          {/* Right side - Category Navigation */}
          <div className="hidden md:flex justify-end">
            <NavigationMenu className="py-6">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100">Categorias</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                      <CategoryLink 
                        title="Furação e Demolição" 
                        href="/produtos?categoria=furacao-demolicao"
                        icon={<Drill className="h-5 w-5 text-primary" />}
                      />
                      <CategoryLink 
                        title="Movimentação" 
                        href="/produtos?categoria=movimentacao-elevacao"
                        icon={<Forklift className="h-5 w-5 text-primary" />}
                      />
                      <CategoryLink 
                        title="Concretagem" 
                        href="/produtos?categoria=concretagem-mistura"
                        icon={<Truck className="h-5 w-5 text-primary" />}
                      />
                      <CategoryLink 
                        title="Outros Equipamentos" 
                        href="/produtos"
                        icon={<Construction className="h-5 w-5 text-primary" />}
                      />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/sobre" 
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100"
                    >
                      Sobre Nós
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/produtos" 
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100"
                    >
                      Produtos
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CategoryLinkProps {
  title: string;
  href: string;
  icon: React.ReactNode;
}

function CategoryLink({ title, href, icon }: CategoryLinkProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className="flex items-center gap-2 p-3 select-none rounded-md hover:bg-gray-100 transition-colors"
        >
          {icon}
          <div className="text-sm font-medium">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
