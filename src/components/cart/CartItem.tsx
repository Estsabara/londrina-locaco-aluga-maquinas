
import { Button } from "@/components/ui/button";
import { formatShortDate } from "@/lib/date-utils";
import { Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CartItem as CartItemType } from "@/types";
import { Link } from "react-router-dom";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { removeFromCart } = useCart();
  const { product, startDate, endDate, quantity, rentalPeriod } = item;
  
  const getPeriodText = () => {
    switch (rentalPeriod) {
      case "daily":
        return "Locação Diária";
      case "weekly":
        return "Locação Semanal";
      case "monthly":
        return "Locação Mensal";
      default:
        return "Locação";
    }
  };

  return (
    <div className="flex flex-col sm:flex-row border-b py-4 gap-4">
      <div className="w-full sm:w-36 h-36 bg-secondary rounded-md flex-shrink-0 overflow-hidden">
        <Link to={`/produto/${product.id}`}>
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      
      <div className="flex-grow space-y-2">
        <div className="flex justify-between items-start gap-2">
          <Link to={`/produto/${product.id}`} className="hover:underline">
            <h3 className="text-lg font-semibold">{product.name}</h3>
          </Link>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <div>{product.category}</div>
          <div className="font-medium">{getPeriodText()}</div>
          <div>
            De {formatShortDate(startDate)} até {formatShortDate(endDate)}
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="bg-secondary px-3 py-1 rounded-md">
            Qtd: {quantity}
          </div>
          
          <Button 
            variant="destructive" 
            size="sm" 
            onClick={() => removeFromCart(product.id)}
          >
            <Trash2 className="w-4 h-4 mr-1" />
            Remover
          </Button>
        </div>
      </div>
    </div>
  );
}
