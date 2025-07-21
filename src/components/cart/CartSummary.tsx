
import { useCart } from "@/context/CartContext";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { createWhatsAppLink } from "@/lib/utils";

export function CartSummary() {
  const { cartItems } = useCart();

  const handleWhatsAppClick = () => {
    let message = "*Nova Convocação do Arsenal YGG*\n\n";
    
    message += "*Equipamentos Solicitados:*\n";
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
    
    message += "\n\nDesejo prosseguir com a convocação destes equipamentos ancestrais e obter um orçamento dos mestres YGG.";

    const whatsappUrl = createWhatsAppLink("554333723860", message);
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <div className="bg-nordic-ice rounded-lg p-6 sticky top-20 border border-nordic-gold/30">
      <h2 className="text-xl font-semibold mb-4 nordic-title text-nordic-deep">Resumo da Convocação</h2>
      
      <div className="space-y-3 mb-4">
        {cartItems.map((item) => {
          const days = Math.ceil(
            (item.endDate.getTime() - item.startDate.getTime()) / (1000 * 60 * 60 * 24)
          ) + 1;
          
          return (
            <div key={`${item.product.id}-${item.startDate.toISOString()}`} className="text-sm">
              <div className="font-medium nordic-title text-nordic-deep">{item.product.name}</div>
              <div className="flex justify-between text-muted-foreground">
                <span>{item.quantity} × {days} {days === 1 ? 'dia' : 'dias'}</span>
              </div>
            </div>
          );
        })}
      </div>
      
      <Separator className="my-4" />
      
      <div className="mt-4 text-sm text-muted-foreground">
        <p>Convoque os mestres para obter orçamento personalizado.</p>
        <p>Pergaminhos de identificação e garantias serão solicitados.</p>
      </div>

      <Button 
        className="w-full mt-6 bg-nordic-deep hover:bg-nordic-pine transition-all" 
        size="lg"
        onClick={handleWhatsAppClick}
      >
        <MessageSquare className="mr-2 h-5 w-5" />
        Convocar via Mensageiro
      </Button>
    </div>
  );
}
