
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { calculateTotalPrice } from "@/lib/date-utils";
import { DateRange, Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { ProductInfo } from "@/components/products/ProductInfo";
import { ContactButton } from "@/components/products/ContactButton";
import { RentalOptions } from "@/components/products/RentalOptions";
import { ProductSpecs } from "@/components/products/ProductSpecs";
import { RentalTerms } from "@/components/products/RentalTerms";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { toast: hookToast } = useToast();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState<DateRange>({ from: undefined, to: undefined });
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        
        if (!id) return;
        
        // Convert the id parameter to a number since Product.id is a number type
        const numericId = parseInt(id, 10);
        
        if (isNaN(numericId)) {
          console.error('Invalid product ID:', id);
          toast.error('ID de produto inválido');
          return;
        }
        
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', numericId)
          .single();
        
        if (error) {
          console.error('Error fetching product:', error);
          toast.error('Erro ao carregar informações do produto');
          return;
        }
        
        if (!data) {
          console.error('No product found with ID:', id);
          toast.error('Produto não encontrado');
          return;
        }
        
        // Process specs field to ensure it's an object
        let processedSpecs = {};
        if (data.specs && typeof data.specs === 'object') {
          processedSpecs = data.specs;
        } else if (data.specs) {
          try {
            processedSpecs = JSON.parse(String(data.specs));
          } catch {
            processedSpecs = { value: data.specs };
          }
        }
        
        const formattedProduct: Product = {
          id: data.id,
          name: data.name,
          description: data.description || '',
          price: data.price,
          imageUrl: data.imageurl || '/placeholder.svg',
          category: data.category,
          available: data.available,
          brand: data.brand || '',
          model: data.model || '',
          specs: processedSpecs
        };
        
        setProduct(formattedProduct);
      } catch (error) {
        console.error('Unexpected error:', error);
        toast.error('Ocorreu um erro ao carregar o produto');
      } finally {
        setLoading(false);
      }
    }
    
    fetchProduct();
  }, [id]);
  
  const handleAddToCart = () => {
    if (!product) return;
    
    if (!dateRange.from || !dateRange.to) {
      hookToast({
        title: "Período não selecionado",
        description: "Por favor, selecione o período de locação",
        variant: "destructive"
      });
      return;
    }
    
    addToCart(product, dateRange, quantity);
    
    hookToast({
      title: "Adicionado ao carrinho",
      description: `${product.name} foi adicionado ao carrinho`,
      variant: "default"
    });
  };
  
  const rentalTotal = product && dateRange.from && dateRange.to
    ? calculateTotalPrice(product.price, dateRange.from, dateRange.to) * quantity
    : 0;
  
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container py-10">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
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
