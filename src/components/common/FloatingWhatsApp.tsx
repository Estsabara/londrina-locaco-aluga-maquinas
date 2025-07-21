
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/utils";

export function FloatingWhatsApp() {
  const whatsappMessage = "Salve, guerreiros do YGG! Busco informações sobre o arsenal de equipamentos disponível.";

  const handleWhatsAppContact = () => {
    const whatsappUrl = createWhatsAppLink("554333723860", whatsappMessage);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppContact}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-nordic-pine text-white px-4 py-3 rounded-full shadow-lg hover:bg-nordic-deep transition-colors duration-200 border-2 border-nordic-gold"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-medium nordic-text">Convoque pelo Mensageiro</span>
    </button>
  );
}
