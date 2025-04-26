
import { LucideIcon } from "lucide-react";
import { Wrench } from "lucide-react";

interface CategoryItem {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

export const categoryData: CategoryItem[] = [
  { 
    name: "Andaimes",
    slug: "andaimes-acessorios",
    description: "Andaimes e acessórios",
    icon: Wrench,
    category: "Andaimes e Acessórios"
  },
  { 
    name: "Acesso e Elevação",
    slug: "movimentacao-elevacao",
    description: "Equipamentos para acesso e elevação",
    icon: Wrench,
    category: "Movimentação e Elevação"
  },
  { 
    name: "Compactação",
    slug: "compactacao-solo",
    description: "Equipamentos para compactação",
    icon: Wrench,
    category: "Compactação de Solo"
  },
  { 
    name: "Concretagem",
    slug: "concretagem-mistura",
    description: "Equipamentos para concretagem",
    icon: Wrench,
    category: "Concretagem e Mistura"
  },
  { 
    name: "Jardinagem",
    slug: "equipamentos-diversos",
    description: "Equipamentos para jardinagem",
    icon: Wrench,
    category: "Equipamentos Diversos"
  },
  { 
    name: "Ferramentas Elétricas",
    slug: "perfuracao-demolicao",
    description: "Ferramentas elétricas profissionais",
    icon: Wrench,
    category: "Perfuração e Demolição"
  }
];

// Creating the category groups that CategoryTabs needs
export const categoryMaisAlugados: CategoryItem[] = categoryData.slice(0, 6);
export const categoryFasesDaObra: CategoryItem[] = [
  { 
    name: "Preparação",
    slug: "perfuracao-demolicao",
    description: "Equipamentos para preparação do terreno",
    icon: Wrench,
    category: "Perfuração e Demolição"
  },
  { 
    name: "Fundação",
    slug: "concretagem-mistura",
    description: "Equipamentos para fundação",
    icon: Wrench,
    category: "Concretagem e Mistura"
  },
  { 
    name: "Alvenaria",
    slug: "andaimes-acessorios",
    description: "Equipamentos para alvenaria",
    icon: Wrench,
    category: "Andaimes e Acessórios"
  }
];

export const categoryTipoDeTrabalho: CategoryItem[] = [
  { 
    name: "Perfuração",
    slug: "perfuracao-demolicao",
    description: "Equipamentos para perfuração",
    icon: Wrench,
    category: "Perfuração e Demolição"
  },
  { 
    name: "Demolição",
    slug: "perfuracao-demolicao",
    description: "Equipamentos para demolição",
    icon: Wrench,
    category: "Perfuração e Demolição"
  },
  { 
    name: "Corte",
    slug: "corte-acabamento",
    description: "Equipamentos para corte",
    icon: Wrench,
    category: "Corte e Acabamento"
  }
];
