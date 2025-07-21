
import { DivideIcon as LucideIcon } from "lucide-react";
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
    name: "Preparação do Campo",
    slug: "perfuracao-demolicao",
    description: "Ferramentas para preparar o campo de batalha",
    icon: Wrench,
    category: "Perfuração e Demolição"
  },
  { 
    name: "Forja das Bases",
    slug: "concretagem-mistura",
    description: "Equipamentos para forjar fundações sólidas",
    icon: Wrench,
    category: "Concretagem e Mistura"
  },
  { 
    name: "Construção dos Muros",
    slug: "andaimes-acessorios",
    description: "Ferramentas para erguer muralhas",
    icon: Wrench,
    category: "Andaimes e Acessórios"
  }
];

export const categoryTipoDeTrabalho: CategoryItem[] = [
  { 
    name: "Perfuração Ancestral",
    slug: "perfuracao-demolicao",
    description: "Ferramentas para perfurar como os antigos",
    icon: Wrench,
    category: "Perfuração e Demolição"
  },
  { 
    name: "Demolição Épica",
    slug: "perfuracao-demolicao",
    description: "Equipamentos para demolir como Thor",
    icon: Wrench,
    category: "Perfuração e Demolição"
  },
  { 
    name: "Corte Preciso",
    slug: "corte-acabamento",
    description: "Lâminas afiadas como espadas nórdicas",
    icon: Wrench,
    category: "Corte e Acabamento"
  }
];
