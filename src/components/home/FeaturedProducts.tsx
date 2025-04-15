
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeaturedProductsProps {
  products: Product[];
  selectedCategory: string;
}

export function FeaturedProducts({ products, selectedCategory }: FeaturedProductsProps) {
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
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
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
