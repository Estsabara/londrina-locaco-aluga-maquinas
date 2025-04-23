
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { products as staticProducts } from "@/data/products";

interface FeaturedProductsProps {
  selectedCategory: string;
}

export function FeaturedProducts({ selectedCategory }: FeaturedProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useStaticData, setUseStaticData] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);
        
        let query = supabase
          .from('products')
          .select('*')
          .eq('available', true)
          .order('created_at', { ascending: false })
          .limit(6);
        
        // Add category filter if not showing all
        if (selectedCategory !== "Todos") {
          query = query.eq('category', selectedCategory);
        }
        
        const { data, error } = await query;
        
        if (error) {
          console.error('Error fetching products:', error);
          setError(error.message);
          toast.error('Erro ao carregar produtos');
          // Fall back to static data if there's an error
          setUseStaticData(true);
          return;
        }
        
        if (!data || data.length === 0) {
          console.log('No products found for category:', selectedCategory);
          // If no data from database, use static data
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
            price: item.price,
            priceWeekly: (item as any).priceweekly || item.price * 6,
            priceMonthly: (item as any).pricemonthly || item.price * 25,
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
        setError(error instanceof Error ? error.message : 'Erro desconhecido');
        toast.error('Ocorreu um erro ao carregar os produtos');
        // Fall back to static data if there's an error
        setUseStaticData(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedCategory]);

  // If we're using static data, filter it by the selected category
  const displayProducts = useStaticData 
    ? (selectedCategory === "Todos" 
        ? staticProducts.slice(0, 6) 
        : staticProducts.filter(p => p.category === selectedCategory).slice(0, 6))
    : products;

  return (
    <section className="py-12 bg-[hsl(0deg_0%_13%_/_3%)]">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">
            {selectedCategory === "Todos" ? "Equipamentos em Destaque" : `Equipamentos: ${selectedCategory}`}
          </h2>
          <Button asChild variant="ghost" className="hidden sm:flex">
            <Link to="/produtos" className="group">
              Ver todos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : error && !useStaticData ? (
          <div className="text-center py-10 bg-red-50 rounded-lg border border-red-200">
            <AlertTriangle className="mx-auto h-10 w-10 text-red-400 mb-3" />
            <h3 className="text-lg font-medium text-red-800">Erro ao carregar produtos</h3>
            <p className="text-red-600 mt-2 max-w-md mx-auto">
              Ocorreu um problema na conexão com o banco de dados. Por favor, tente novamente mais tarde.
            </p>
            <p className="text-sm text-red-500 mt-2">Detalhes técnicos: {error}</p>
          </div>
        ) : displayProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-medium">Nenhum equipamento encontrado</h3>
            <p className="text-muted-foreground mt-2">
              Não encontramos equipamentos nesta categoria.
            </p>
          </div>
        )}
        
        <div className="mt-8 text-center sm:hidden">
          <Button asChild>
            <Link to="/produtos">
              Ver todos os equipamentos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
