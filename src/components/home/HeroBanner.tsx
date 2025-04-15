
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export function HeroBanner() {
  const isMobile = useIsMobile();
  
  return (
    <section className="bg-primary py-6 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-3 md:space-y-4 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-white">
              Tudo para sua obra
            </h1>
            <p className="text-base md:text-lg text-white max-w-md mx-auto lg:mx-0">
              mais de 70 tipos de equipamentos à sua disposição
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Button asChild size={isMobile ? "default" : "lg"} className="bg-secondary text-white hover:bg-secondary/80">
                <Link to="/produtos">
                  Alugue já!
                </Link>
              </Button>
            </div>
          </div>
          <div className={`${isMobile ? 'mt-4' : 'lg:ml-auto'}`}>
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-full overflow-hidden rounded-xl bg-muted">
              <img 
                src="/lovable-uploads/3b4fefb8-58db-4d89-81e6-00d74836ab68.png" 
                alt="Equipamentos de construção" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
