
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { createWhatsAppLink } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export function CartSummary() {
  const { cartItems } = useCart();

  const handleWhatsAppClick = () => {
    let message = "*Novo Pedido de Locação*\n\n";
    
    message += "*Itens do Pedido:*\n";
    cartItems.forEach(item => {
      message += `\n- ${item.product.name}\n`;
      message += `  Quantidade: ${item.quantity}\n`;
      message += `  Período: ${item.startDate.toLocaleDateString()} até ${item.endDate.toLocaleDateString()}\n`;
      message += `  Tipo de locação: ${
        item.rentalPeriod === 'daily' ? 'Diária' : 
        item.rentalPeriod === 'weekly' ? 'Semanal' : 
        item.rentalPeriod === 'biweekly' ? 'Quinzenal' : 'Mensal'
      }\n`;
    });
    
    message += "\nGostaria de prosseguir com a locação destes equipamentos.";

    const whatsappUrl = createWhatsAppLink("554333723860", message);
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <div className="bg-[hsl(0deg_0%_100%_/_23%)] rounded-lg p-6 sticky top-20">
      <h2 className="text-xl font-semibold mb-4">Resumo da Locação</h2>
      
      <div className="mt-4 text-sm text-muted-foreground">
        <p>Pagamento será feito na retirada do equipamento.</p>
        <p>Documentação e caução serão solicitados.</p>
      </div>

      <Button 
        className="w-full mt-6 bg-green-600 hover:bg-green-700" 
        size="lg"
        onClick={handleWhatsAppClick}
      >
        <MessageSquare className="mr-2 h-5 w-5" />
        Enviar Pedido pelo WhatsApp
      </Button>
    </div>
  );
}
