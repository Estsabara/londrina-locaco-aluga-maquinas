
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <section className="bg-primary py-8 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-accent">
              +70 tipos de equipamentos
            </h1>
            <p className="text-lg md:text-xl text-white">
              para todas as fases da obra
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-accent hover:text-primary">
                <Link to="/produtos">
                  Alugue já!
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:ml-auto">
            <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl bg-muted">
              <img 
                src="/placeholder.svg" 
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
