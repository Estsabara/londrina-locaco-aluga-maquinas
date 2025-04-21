
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/CartContext";
import { Product, DateRange } from "@/types";
import { calculateTotalPrice } from "@/lib/date-utils";

export function useProductCart(product: Product | null) {
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined });
  const [quantity, setQuantity] = useState(1);
  
  const handleAddToCart = () => {
    if (!product) return;
    
    if (!dateRange.from || !dateRange.to) {
      toast({
        title: "Período não selecionado",
        description: "Por favor, selecione o período de locação",
        variant: "destructive"
      });
      return;
    }
    
    addToCart(product, dateRange, quantity);
    
    toast({
      title: "Adicionado ao carrinho",
      description: `${product.name} foi adicionado ao carrinho`,
      variant: "default"
    });
  };
  
  const rentalTotal = product && dateRange.from && dateRange.to
    ? calculateTotalPrice(product.price, dateRange.from, dateRange.to) * quantity
    : 0;
  
  return {
    dateRange,
    setDateRange,
    quantity,
    setQuantity,
    handleAddToCart,
    rentalTotal
  };
}
