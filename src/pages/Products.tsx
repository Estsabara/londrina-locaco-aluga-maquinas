
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductList } from "@/components/products/ProductList";
import { categories } from "@/data/products";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Product } from "@/types";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('name');
        
        if (error) {
          console.error('Error fetching products:', error);
          toast.error('Erro ao carregar produtos');
          return;
        }
        
        // Convert database products to match our Product type
        const formattedProducts = data.map(item => ({
          id: item.id,
          name: item.name,
          description: item.description || '',
          price: item.price,
          imageUrl: item.imageurl || '/placeholder.svg',
          category: item.category,
          available: item.available,
          brand: item.brand || '',
          model: item.model || '',
          specs: item.specs || {}
        }));
        
        setProducts(formattedProducts);
      } catch (error) {
        console.error('Unexpected error:', error);
        toast.error('Ocorreu um erro ao carregar os produtos');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container py-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">Nossos Equipamentos</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de equipamentos para construção civil. 
              Escolha as melhores máquinas para sua obra com preços competitivos.
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <ProductList products={products} categories={categories} />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
