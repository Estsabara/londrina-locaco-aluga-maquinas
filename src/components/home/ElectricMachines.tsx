
import { useEffect, useState } from "react";
import { Product } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";
import { supabase } from "@/integrations/supabase/client";
import { Hammer, AlertTriangle } from "lucide-react";
import { products as staticProducts } from "@/data/products";

export function ElectricMachines() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useStaticData, setUseStaticData] = useState(false);

  useEffect(() => {
    async function fetchElectricProducts() {
      try {
        setLoading(true);
        setError(null);
        
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('available', true)
          .eq('category', 'Energia')
          .limit(6);
        
        if (error) {
          console.error('Error fetching products:', error);
          setError(error.message);
          setUseStaticData(true);
          return;
        }
        
        if (!data || data.length === 0) {
          console.log('No electric products found');
          setUseStaticData(true);
          return;
        }
        
        // Format products to match Product type
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
        setUseStaticData(false);
      } catch (error) {
        console.error('Unexpected error:', error);
        setError(error instanceof Error ? error.message : 'Erro desconhecido');
        setUseStaticData(true);
      } finally {
        setLoading(false);
      }
    }

    fetchElectricProducts();
  }, []);

  // Get static products as fallback
  const staticElectricProducts = staticProducts
    .filter(product => product.category === "Energia")
    .slice(0, 6);

  const displayProducts = useStaticData ? staticElectricProducts : products;

  // Always render the section now that we're using fallback data
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-2 mb-8">
          <Hammer className="w-8 h-8 text-nordic-deep" />
          <h2 className="text-3xl font-bold tracking-tight nordic-title text-nordic-deep">
            Máquinas Forjadas pelos Deuses
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nordic-deep"></div>
          </div>
        ) : error && !useStaticData ? (
          <div className="text-center py-10 bg-nordic-ice rounded-lg border border-nordic-gold/30">
            <AlertTriangle className="mx-auto h-10 w-10 text-red-400 mb-3" />
            <h3 className="text-lg font-medium text-nordic-deep nordic-title">Falha na Invocação</h3>
            <p className="text-red-600 mt-2 max-w-md mx-auto">
              Os espíritos das máquinas estão temporariamente indisponíveis. Tente invocar novamente.
            </p>
            <p className="text-sm text-red-500 mt-2">Detalhes técnicos: {error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
