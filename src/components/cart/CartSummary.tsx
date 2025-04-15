
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/date-utils";
import { Separator } from "@/components/ui/separator";

export function CartSummary() {
  const { cartItems, getCartTotal } = useCart();
  
  const cartTotal = getCartTotal();
  
  return (
    <div className="bg-secondary rounded-lg p-6 sticky top-20">
      <h2 className="text-xl font-semibold mb-4">Resumo da Locação</h2>
      
      <div className="space-y-3 mb-4">
        {cartItems.map((item) => {
          const days = Math.ceil(
            (item.endDate.getTime() - item.startDate.getTime()) / (1000 * 60 * 60 * 24)
          ) + 1;
          
          const itemTotal = item.product.price * days * item.quantity;
          
          return (
            <div key={`${item.product.id}-${item.startDate.toISOString()}`} className="text-sm">
              <div className="font-medium">{item.product.name}</div>
              <div className="flex justify-between text-muted-foreground">
                <span>{item.quantity} × {days} {days === 1 ? 'dia' : 'dias'}</span>
                <span>{formatCurrency(itemTotal)}</span>
              </div>
            </div>
          );
        })}
      </div>
      
      <Separator className="my-4" />
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatCurrency(cartTotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxa de serviço</span>
          <span>{formatCurrency(0)}</span>
        </div>
        
        <Separator />
        
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>{formatCurrency(cartTotal)}</span>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-muted-foreground">
        <p>Pagamento será feito na retirada do equipamento.</p>
        <p>Documentação e caução serão solicitados.</p>
      </div>
    </div>
  );
}
