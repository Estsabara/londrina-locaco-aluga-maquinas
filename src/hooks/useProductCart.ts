
import { useState, useEffect } from "react";
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
  const [periodQuantity, setPeriodQuantity] = useState(1);
  
  // Reset date range when rental period changes
  useEffect(() => {
    setDateRange({ from: undefined, to: undefined });
    setPeriodQuantity(1);
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
  
  const getCurrentPrice = () => {
    if (!product) return 0;
    
    switch (rentalPeriod) {
      case "weekly":
        // Apply 5% discount for weekly rentals
        const weeklyPrice = product.priceWeekly || product.price * 6;
        return weeklyPrice * 0.95; // 5% off
      case "monthly":
        // Apply 10% discount for monthly rentals
        const monthlyPrice = product.priceMonthly || product.price * 25;
        return monthlyPrice * 0.90; // 10% off
      case "daily":
      default:
        return product.price;
    }
  };
  
  // Recalculate rental total whenever any of the relevant parameters change
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
    setRentalPeriod,
    periodQuantity,
    setPeriodQuantity
  };
}
