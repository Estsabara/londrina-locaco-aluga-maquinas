
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/CartContext";
import { Product, DateRange, RentalPeriodType } from "@/types";
import { calculateTotalPrice } from "@/lib/date-utils";

export function useProductCart(product: Product | null) {
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined });
  const [quantity, setQuantity] = useState(1);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodType>("daily");
  
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
    
    addToCart(product, dateRange, quantity, rentalPeriod);
    
    toast({
      title: "Adicionado ao carrinho",
      description: `${product.name} foi adicionado ao carrinho`,
      variant: "default"
    });
  };
  
  const getCurrentPrice = () => {
    if (!product) return 0;
    
    switch (rentalPeriod) {
      case "weekly":
        return product.priceWeekly || product.price * 6; // Default to 6x daily if no weekly price
      case "monthly":
        return product.priceMonthly || product.price * 25; // Default to 25x daily if no monthly price
      case "daily":
      default:
        return product.price;
    }
  };
  
  const rentalTotal = product && dateRange.from && dateRange.to
    ? calculateTotalPrice(getCurrentPrice(), dateRange.from, dateRange.to, rentalPeriod) * quantity
    : 0;
  
  return {
    dateRange,
    setDateRange,
    quantity,
    setQuantity,
    handleAddToCart,
    rentalTotal,
    rentalPeriod,
    setRentalPeriod
  };
}
