
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/utils";

interface ContactButtonProps {
  productName: string;
}

export function ContactButton({ productName }: ContactButtonProps) {
  const openWhatsApp = () => {
    const message = `Olá! Estou interessado em alugar o equipamento: ${productName}. Poderia me dar mais informações?`;
    const whatsappUrl = createWhatsAppLink("554333723860", message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button 
      className="w-full bg-green-600 hover:bg-green-700 text-white" 
      size="lg"
      onClick={openWhatsApp}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Alugar pelo WhatsApp
    </Button>
  );
}
