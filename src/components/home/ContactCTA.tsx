
import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/utils";

export function ContactCTA() {
  const whatsappNumber = "5543337238607";
  const whatsappMessage = "Olá! Preciso de ajuda para encontrar o equipamento ideal para minha obra.";

  const handleWhatsAppContact = () => {
    const whatsappUrl = createWhatsAppLink(whatsappNumber, whatsappMessage);
    window.open(whatsappUrl, '_blank');
  };

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
          <Button 
            size="lg" 
            className="mt-2"
            onClick={handleWhatsAppContact}
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  );
}
