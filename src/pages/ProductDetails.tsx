
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { products } from "@/data/products";
import { calculateTotalPrice } from "@/lib/date-utils";
import { DateRange } from "@/types";
import { useCart } from "@/context/CartContext";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { ProductInfo } from "@/components/products/ProductInfo";
import { ContactButton } from "@/components/products/ContactButton";
import { RentalOptions } from "@/components/products/RentalOptions";
import { ProductSpecs } from "@/components/products/ProductSpecs";
import { RentalTerms } from "@/components/products/RentalTerms";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const { addToCart } = useCart();
  
  const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined });
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container py-10">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold">Produto não encontrado</h1>
            <p className="text-muted-foreground">
              O produto que você está procurando não existe ou foi removido.
            </p>
            <Button asChild>
              <Link to="/produtos">Voltar para Equipamentos</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const { name, description, price, imageUrl, category, brand, model, specs, available } = product;
  
  const handleAddToCart = () => {
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
      description: `${name} foi adicionado ao carrinho`,
      variant: "default"
    });
  };
  
  const rentalTotal = dateRange.from && dateRange.to
    ? calculateTotalPrice(price, dateRange.from, dateRange.to) * quantity
    : 0;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container py-8">
        <div className="mb-6">
          <Button asChild variant="ghost" className="pl-0">
            <Link to="/produtos" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Equipamentos
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductImageGallery imageUrl={imageUrl} name={name} />
          
          <div className="space-y-6">
            <ProductInfo 
              name={name}
              price={price}
              category={category}
              available={available}
              description={description}
              brand={brand}
              model={model}
            />
            
            <div className="flex flex-col gap-3">
              <ContactButton productName={name} />
            </div>
            
            <Separator />
            
            <RentalOptions
              available={available}
              price={price}
              dateRange={dateRange}
              setDateRange={setDateRange}
              quantity={quantity}
              setQuantity={setQuantity}
              rentalTotal={rentalTotal}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
        
        <div className="mt-10">
          <ProductSpecs specs={specs} />
          <RentalTerms />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
