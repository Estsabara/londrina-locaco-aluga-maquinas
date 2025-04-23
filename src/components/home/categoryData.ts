
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
import { products } from "@/data/products";

// Helper function to check if a category has products - let's make it always return true to ensure categories display
const hasCategoryProducts = (category: string): boolean => {
  // We're removing the filter to always show categories
  return true;
};

interface CategoryItem {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

export const categoryMaisAlugados: CategoryItem[] = [
  { 
    name: "Perfuração e demolição",
    slug: "perfuracao-demolicao",
    description: "Ferramentas para perfuração e demolição de concreto e alvenaria",
    icon: Drill,
    category: "Perfuração e Demolição"
  },
  { 
    name: "Movimentação e elevação",
    slug: "movimentacao-elevacao",
    description: "Equipamentos para movimentação e elevação de cargas",
    icon: Forklift,
    category: "Movimentação e Elevação"
  },
  { 
    name: "Corte e acabamento",
    slug: "corte-acabamento",
    description: "Ferramentas para corte e acabamento de materiais diversos",
    icon: Scissors,
    category: "Corte e Acabamento"
  },
  { 
    name: "Concretagem e mistura",
    slug: "concretagem-mistura",
    description: "Equipamentos para preparo e aplicação de concreto",
    icon: Truck,
    category: "Concretagem e Mistura"
  },
  { 
    name: "Energia",
    slug: "energia",
    description: "Geradores e equipamentos para fornecimento de energia",
    icon: Zap,
    category: "Energia"
  },
  { 
    name: "Compactação de solo",
    slug: "compactacao-solo",
    description: "Equipamentos para compactação de solo e terraplanagem",
    icon: Hammer,
    category: "Compactação de Solo"
  }
].filter(cat => hasCategoryProducts(cat.category));

export const categoryFasesDaObra: CategoryItem[] = [
  { 
    name: "Canteiro de obras",
    slug: "canteiro-obras",
    description: "Estruturação e organização do canteiro de obras",
    icon: Construction,
    category: "Equipamentos Diversos"
  },
  { 
    name: "Estrutura e alvenaria",
    slug: "estrutura-alvenaria",
    description: "Equipamentos para estruturas e construção de paredes",
    icon: Building,
    category: "Escoramento"
  },
  { 
    name: "Instalações",
    slug: "instalacoes",
    description: "Ferramentas para instalações elétricas e hidráulicas",
    icon: Zap,
    category: "Energia"
  }
].filter(cat => hasCategoryProducts(cat.category));

export const categoryTipoDeTrabalho: CategoryItem[] = [
  { 
    name: "Movimentação e elevação",
    slug: "movimentacao-elevacao",
    description: "Equipamentos para movimentação e elevação de cargas e pessoas",
    icon: Forklift,
    category: "Movimentação e Elevação"
  },
  { 
    name: "Compactação",
    slug: "compactacao",
    description: "Equipamentos para compactação de solo",
    icon: Hammer,
    category: "Compactação de Solo"
  },
  { 
    name: "Concretagem",
    slug: "concretagem",
    description: "Equipamentos para preparo e aplicação de concreto",
    icon: Truck,
    category: "Concretagem e Mistura"
  },
  { 
    name: "Ferramentas elétricas",
    slug: "ferramentas-eletricas",
    description: "Diversas ferramentas elétricas para construção",
    icon: Drill,
    category: "Perfuração e Demolição"
  },
  { 
    name: "Energia",
    slug: "energia",
    description: "Geradores e equipamentos para fornecimento de energia",
    icon: Zap,
    category: "Energia"
  },
  { 
    name: "Outros",
    slug: "outros",
    description: "Outros equipamentos para construção civil",
    icon: Wrench,
    category: "Equipamentos Diversos"
  }
].filter(cat => hasCategoryProducts(cat.category));
