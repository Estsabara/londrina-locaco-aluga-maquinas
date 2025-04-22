
import { LucideIcon } from "lucide-react";
import { 
  Building,
  Construction,
  Drill,
  Forklift,
  Hammer,
  Scissors,
  Truck,
  Zap,
  Wrench,
} from "lucide-react";
import { CategoryCardProps } from "./CategoryCard";
import { products } from "@/data/products";

// Helper function to check if a category has products
const hasCategoryProducts = (category: string): boolean => {
  return products.some(product => product.category === category);
};

export const categoryMaisAlugados: CategoryCardProps[] = [
  { 
    name: "Perfuração e demolição",
    icon: Drill,
    color: "bg-primary",
    category: "Perfuração e Demolição"
  },
  { 
    name: "Movimentação e elevação",
    icon: Forklift,
    color: "bg-primary",
    category: "Movimentação e Elevação"
  },
  { 
    name: "Corte e acabamento",
    icon: Scissors,
    color: "bg-primary",
    category: "Corte e Acabamento"
  },
  { 
    name: "Concretagem e mistura",
    icon: Truck,
    color: "bg-primary",
    category: "Concretagem e Mistura"
  },
  { 
    name: "Energia",
    icon: Zap,
    color: "bg-primary",
    category: "Energia"
  },
  { 
    name: "Compactação de solo",
    icon: Hammer,
    color: "bg-primary",
    category: "Compactação de Solo"
  }
].filter(cat => hasCategoryProducts(cat.category));

export const categoryFasesDaObra: CategoryCardProps[] = [
  { 
    name: "Canteiro de obras",
    icon: Construction,
    color: "bg-primary",
    category: "Equipamentos Diversos"
  },
  { 
    name: "Estrutura e alvenaria",
    icon: Building,
    color: "bg-primary",
    category: "Escoramento"
  },
  { 
    name: "Instalações",
    icon: Zap,
    color: "bg-primary",
    category: "Energia"
  }
].filter(cat => hasCategoryProducts(cat.category));

export const categoryTipoDeTrabalho: CategoryCardProps[] = [
  { 
    name: "Movimentação e elevação",
    icon: Forklift,
    color: "bg-primary",
    category: "Movimentação e Elevação"
  },
  { 
    name: "Compactação",
    icon: Hammer,
    color: "bg-primary",
    category: "Compactação de Solo"
  },
  { 
    name: "Concretagem",
    icon: Truck,
    color: "bg-primary",
    category: "Concretagem e Mistura"
  },
  { 
    name: "Ferramentas elétricas",
    icon: Drill,
    color: "bg-primary",
    category: "Perfuração e Demolição"
  },
  { 
    name: "Energia",
    icon: Zap,
    color: "bg-primary",
    category: "Energia"
  },
  { 
    name: "Outros",
    icon: Wrench,
    color: "bg-primary",
    category: "Equipamentos Diversos"
  }
].filter(cat => hasCategoryProducts(cat.category));
