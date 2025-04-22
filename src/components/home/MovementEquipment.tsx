
import { useEffect, useState } from "react";
import { Product } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";
import { supabase } from "@/integrations/supabase/client";
import { Forklift } from "lucide-react";

export function MovementEquipment() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('available', true)
          .eq('category', 'Movimentação e Elevação')
          .limit(6);
        
        if (error) {
          console.error('Error fetching products:', error);
          return;
        }
        
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
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-2 mb-8">
          <Forklift className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">
            Equipamentos de Movimentação
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
