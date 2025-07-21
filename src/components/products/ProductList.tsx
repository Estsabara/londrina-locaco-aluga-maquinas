
import { useState, useEffect } from "react";
import { Product } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

interface ProductListProps {
  products: Product[];
  categories: string[];
}

export function ProductList({ products, categories }: ProductListProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("categoria");
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl ? "Todos" : "Todos");
  
  useEffect(() => {
    if (categoryFromUrl) {
      // Convert URL slug format to display format
      const categoryMap: {[key: string]: string} = {
        "andaimes-acessorios": "Andaimes e Acessórios",
        "compactacao-solo": "Compactação de Solo",
        "concretagem-mistura": "Concretagem e Mistura",
        "escoramento": "Escoramento",
        "perfuracao-demolicao": "Perfuração e Demolição",
        "corte-acabamento": "Corte e Acabamento",
        "soldagem-fixacao": "Soldagem e Fixação",
        "medicao-niveis": "Medição e Níveis",
        "limpeza": "Limpeza",
        "movimentacao-elevacao": "Movimentação e Elevação",
        "seguranca": "Segurança",
        "energia": "Energia",
        "equipamentos-diversos": "Equipamentos Diversos"
      };
      
      const displayCategory = categoryMap[categoryFromUrl] || categoryFromUrl;
      setSelectedCategory(displayCategory);
    }
  }, [categoryFromUrl]);
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    
    // Update URL query parameter when category changes
    if (category === "Todos") {
      searchParams.delete("categoria");
    } else {
      // Convert category display name to slug if needed
      const categorySlugMap: {[key: string]: string} = {
        "Andaimes e Acessórios": "andaimes-acessorios",
        "Compactação de Solo": "compactacao-solo",
        "Concretagem e Mistura": "concretagem-mistura",
        "Escoramento": "escoramento",
        "Perfuração e Demolição": "perfuracao-demolicao",
        "Corte e Acabamento": "corte-acabamento",
        "Soldagem e Fixação": "soldagem-fixacao",
        "Medição e Níveis": "medicao-niveis",
        "Limpeza": "limpeza",
        "Movimentação e Elevação": "movimentacao-elevacao",
        "Segurança": "seguranca",
        "Energia": "energia",
        "Equipamentos Diversos": "equipamentos-diversos"
      };
      
      const slug = categorySlugMap[category] || category.toLowerCase().replace(/\s+/g, '-');
      searchParams.set("categoria", slug);
    }
    
    setSearchParams(searchParams);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="relative flex-grow w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar no arsenal ancestral..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 rounded-full"
          />
        </div>
        <div className="flex flex-wrap gap-2 w-full overflow-x-auto scrollbar-hide">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className={`${selectedCategory === category ? 'bg-nordic-deep text-white' : 'border-nordic-gold/50 text-nordic-deep hover:bg-nordic-ice'} whitespace-nowrap transition-all`}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-10">
          <h3 className="text-lg font-medium nordic-title text-nordic-deep">Nenhuma Relíquia Encontrada</h3>
          <p className="text-muted-foreground mt-2">
            Tente ajustar sua invocação ou categorias selecionadas no arsenal.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
