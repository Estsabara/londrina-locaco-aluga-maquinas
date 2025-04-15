
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="py-12 md:py-16 bg-primary/10">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Precisando de um equipamento específico?
          </h2>
          <p className="text-lg text-muted-foreground">
            Entre em contato conosco e encontraremos a solução ideal para sua obra.
          </p>
          <Button asChild size="lg" className="mt-2">
            <Link to="/contato">
              Fale Conosco
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
