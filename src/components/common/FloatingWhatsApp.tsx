
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/utils";

export function FloatingWhatsApp() {
  const whatsappMessage = "Olá! Gostaria de mais informações sobre locação de equipamentos.";

  const handleWhatsAppContact = () => {
    const whatsappUrl = createWhatsAppLink("554333723860", whatsappMessage);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppContact}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20ba59] transition-colors duration-200"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-medium">Alugue pelo WhatsApp</span>
    </button>
  );
}
