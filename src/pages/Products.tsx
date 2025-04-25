
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductList } from "@/components/products/ProductList";
import { categories, products as staticProducts } from "@/data/products";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Product } from "@/types";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [useStaticData, setUseStaticData] = useState(false);

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
          setUseStaticData(true);
          return;
        }
        
        if (!data || data.length === 0) {
          console.log('No products found in database, using static data');
          setUseStaticData(true);
          return;
        }
        
        // Convert database products to match our Product type
        const formattedProducts = data.map(item => {
          // Ensure specs is an object, defaulting to empty object if it's not
          let processedSpecs = {};
          if (item.specs && typeof item.specs === 'object') {
            processedSpecs = item.specs;
          } else if (item.specs) {
            // Try to parse if it's a string that might be JSON
            try {
              processedSpecs = JSON.parse(String(item.specs));
            } catch {
              // If parsing fails, create an object with original as value
              processedSpecs = { value: item.specs };
            }
          }
          
          return {
            id: item.id,
            name: item.name,
            description: item.description || '',
            imageUrl: item.imageurl || '/placeholder.svg',
            category: item.category,
            available: item.available,
            brand: item.brand || '',
            model: item.model || '',
            specs: processedSpecs
          };
        });
        
        setProducts(formattedProducts);
        setUseStaticData(false);
      } catch (error) {
        console.error('Unexpected error:', error);
        toast.error('Ocorreu um erro ao carregar os produtos');
        setUseStaticData(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Display the products based on whether we're using static or DB data
  const displayProducts = useStaticData ? staticProducts : products;

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
            <ProductList products={displayProducts} categories={categories} />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
