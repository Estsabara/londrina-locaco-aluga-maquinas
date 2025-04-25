
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/CartContext";
import { Product, DateRange, RentalPeriodType } from "@/types";

export function useProductCart(product: Product | null) {
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined });
  const [quantity, setQuantity] = useState(1);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodType>("daily");
  const [periodQuantity, setPeriodQuantity] = useState(1);
  
  // Reset date range when rental period changes
  useEffect(() => {
    setDateRange({ from: undefined, to: undefined });
  }, [rentalPeriod]);

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
  
  // Since we no longer have prices, we return a dummy value for rentalTotal
  // This maintains the interface but doesn't calculate anything
  const rentalTotal = 0;
  
  return {
    dateRange,
    setDateRange,
    quantity,
    setQuantity,
    handleAddToCart,
    rentalTotal,
    rentalPeriod,
    setRentalPeriod,
    periodQuantity,
    setPeriodQuantity
  };
}
