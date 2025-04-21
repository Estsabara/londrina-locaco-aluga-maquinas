
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";
import { calculateTotalPrice } from "@/lib/date-utils";
import { DateRange } from "@/types";
import { useCart } from "@/context/CartContext";
import { useProductDetails } from "@/hooks/useProductDetails";
import { LoadingState } from "@/components/products/LoadingState";
import { NotFound } from "@/components/products/NotFound";
import { ProductDetailsContent } from "@/components/products/ProductDetailsContent";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const { product, loading } = useProductDetails(id);
  
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
  
  if (loading) {
    return <LoadingState />;
  }
  
  if (!product) {
    return <NotFound />;
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ProductDetailsContent
        product={product}
        dateRange={dateRange}
        setDateRange={setDateRange}
        quantity={quantity}
        setQuantity={setQuantity}
        rentalTotal={rentalTotal}
        onAddToCart={handleAddToCart}
      />
      <Footer />
    </div>
  );
}
