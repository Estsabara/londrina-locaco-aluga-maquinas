
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useProductDetails } from "@/hooks/useProductDetails";
import { LoadingState } from "@/components/products/LoadingState";
import { NotFound } from "@/components/products/NotFound";
import { ProductDetailsContent } from "@/components/products/ProductDetailsContent";
import { useProductCart } from "@/hooks/useProductCart";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { product, loading } = useProductDetails(id);
  const { 
    dateRange, 
    setDateRange, 
    quantity, 
    setQuantity, 
    handleAddToCart, 
    rentalTotal,
    rentalPeriod,
    setRentalPeriod
  } = useProductCart(product);
  
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
        rentalPeriod={rentalPeriod}
        setRentalPeriod={setRentalPeriod}
      />
      <Footer />
    </div>
  );
}
