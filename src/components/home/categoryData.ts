import { LucideIcon } from "lucide-react";
import { 
  ArrowUp,
  Stairs,
  Hammer,
  MixerHorizontal,
  Drill,
  LawnMower,
  VacuumCleaner,
  Engine,
  Tools
} from "lucide-react";

// Helper function to check if a category has products
const hasCategoryProducts = (category: string): boolean => {
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
    name: "Acesso e elevação",
    slug: "acesso-elevacao",
    description: "Equipamentos para acesso e elevação",
    icon: ArrowUp,
    category: "Acesso e Elevação"
  },
  { 
    name: "Andaimes",
    slug: "andaimes",
    description: "Andaimes e acessórios",
    icon: Stairs,
    category: "Andaimes"
  },
  { 
    name: "Compactação",
    slug: "compactacao",
    description: "Equipamentos para compactação",
    icon: Hammer,
    category: "Compactação"
  },
  { 
    name: "Concretagem",
    slug: "concretagem",
    description: "Equipamentos para concretagem",
    icon: MixerHorizontal,
    category: "Concretagem"
  },
  { 
    name: "Ferramentas elétricas",
    slug: "ferramentas-eletricas",
    description: "Ferramentas elétricas profissionais",
    icon: Drill,
    category: "Ferramentas Elétricas"
  },
  { 
    name: "Furação e demolição",
    slug: "furacao-demolicao",
    description: "Equipamentos para furação e demolição",
    icon: Drill,
    category: "Furação e Demolição"
  },
  { 
    name: "Jardinagem",
    slug: "jardinagem",
    description: "Equipamentos para jardinagem",
    icon: LawnMower,
    category: "Jardinagem"
  },
  { 
    name: "Limpeza",
    slug: "limpeza",
    description: "Equipamentos para limpeza",
    icon: VacuumCleaner,
    category: "Limpeza"
  },
  { 
    name: "Motores",
    slug: "motores",
    description: "Motores e geradores",
    icon: Engine,
    category: "Motores"
  },
  { 
    name: "Outros",
    slug: "outros",
    description: "Outros equipamentos",
    icon: Tools,
    category: "Outros"
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
