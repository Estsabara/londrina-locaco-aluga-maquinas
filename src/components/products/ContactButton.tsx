
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/utils";

interface ContactButtonProps {
  productName: string;
}

export function ContactButton({ productName }: ContactButtonProps) {
  const openWhatsApp = () => {
    const message = `Salve, mestres do YGG! Busco informações sobre o equipamento: ${productName}. Podem me auxiliar nesta jornada?`;
    const whatsappUrl = createWhatsAppLink("554333723860", message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button 
      className="w-full bg-nordic-deep hover:bg-nordic-pine text-white transition-all" 
      size="lg"
      onClick={openWhatsApp}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Convocar via Mensageiro
    </Button>
  );
}
