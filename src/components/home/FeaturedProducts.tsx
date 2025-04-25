import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, AlertTriangle, Search } from "lucide-react";
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
  const [searchTerm, setSearchTerm] = useState("");

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
        
        if (selectedCategory !== "Todos") {
          query = query.eq('category', selectedCategory);
        }
        
        const { data, error } = await query;
        
        if (error) {
          console.error('Error fetching products:', error);
          setError(error.message);
          toast.error('Erro ao carregar produtos');
          setUseStaticData(true);
          return;
        }
        
        if (!data || data.length === 0) {
          console.log('No products found for category:', selectedCategory);
          setUseStaticData(true);
          return;
        }
        
        const formattedProducts = data.map(item => {
          let processedSpecs = {};
          if (item.specs && typeof item.specs === 'object') {
            processedSpecs = item.specs;
          } else if (item.specs) {
            try {
              processedSpecs = JSON.parse(String(item.specs));
            } catch {
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
        setUseStaticData(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedCategory]);

  const filteredProducts = (useStaticData ? staticProducts : products)
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product => 
      selectedCategory === "Todos" ? true : product.category === selectedCategory
    )
    .slice(0, 6);

  return (
    <section className="py-12 bg-[hsl(0deg_0%_13%_/_3%)]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
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

          <div className="relative max-w-md w-full mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar equipamentos..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium">Nenhum equipamento encontrado</h3>
              <p className="text-muted-foreground mt-2">
                Não encontramos equipamentos com estes critérios de busca.
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
      </div>
    </section>
  );
}
