
import { CartItem as CartItemType } from "@/types";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatCurrency, formatShortDate, calculateDaysBetween, calculateTotalPrice } from "@/lib/date-utils";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { removeFromCart } = useCart();
  const { product, startDate, endDate, quantity } = item;
  
  const rentalDays = calculateDaysBetween(startDate, endDate);
  const itemTotal = calculateTotalPrice(product.price, startDate, endDate) * quantity;
  
  return (
    <div className="flex flex-col sm:flex-row py-4 border-b gap-4">
      <div className="w-full sm:w-24 h-24 flex-shrink-0 bg-muted rounded overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.brand} - {product.model}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeFromCart(product.id)}
            className="text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
          <div>
            <div className="text-sm">
              <span className="font-medium">Período:</span>{" "}
              {formatShortDate(startDate)} até {formatShortDate(endDate)}
            </div>
            <div className="text-sm">
              <span className="font-medium">Duração:</span> {rentalDays} {rentalDays === 1 ? "dia" : "dias"}
            </div>
          </div>
          <div>
            <div className="text-sm">
              <span className="font-medium">Valor diário:</span> {formatCurrency(product.price)}
            </div>
            <div className="text-sm">
              <span className="font-medium">Quantidade:</span> {quantity}
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-2">
          <div className="font-bold text-lg">
            {formatCurrency(itemTotal)}
          </div>
        </div>
      </div>
    </div>
  );
}
