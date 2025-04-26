
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
    slug: "andaimes",
    description: "Andaimes e acessórios",
    icon: Wrench,
    category: "Andaimes"
  },
  { 
    name: "Acesso e Elevação",
    slug: "acesso-elevacao",
    description: "Equipamentos para acesso e elevação",
    icon: Wrench,
    category: "Acesso e Elevação"
  },
  { 
    name: "Compactação",
    slug: "compactacao",
    description: "Equipamentos para compactação",
    icon: Wrench,
    category: "Compactação"
  },
  { 
    name: "Concretagem",
    slug: "concretagem",
    description: "Equipamentos para concretagem",
    icon: Wrench,
    category: "Concretagem"
  },
  { 
    name: "Jardinagem",
    slug: "jardinagem",
    description: "Equipamentos para jardinagem",
    icon: Wrench,
    category: "Jardinagem"
  },
  { 
    name: "Ferramentas Elétricas",
    slug: "ferramentas-eletricas",
    description: "Ferramentas elétricas profissionais",
    icon: Wrench,
    category: "Ferramentas Elétricas"
  }
];

// Creating the category groups that CategoryTabs needs
export const categoryMaisAlugados: CategoryItem[] = categoryData.slice(0, 6);
export const categoryFasesDaObra: CategoryItem[] = [
  { 
    name: "Preparação",
    slug: "preparacao",
    description: "Equipamentos para preparação do terreno",
    icon: Wrench,
    category: "Preparação"
  },
  { 
    name: "Fundação",
    slug: "fundacao",
    description: "Equipamentos para fundação",
    icon: Wrench,
    category: "Fundação"
  },
  { 
    name: "Alvenaria",
    slug: "alvenaria",
    description: "Equipamentos para alvenaria",
    icon: Wrench,
    category: "Alvenaria"
  }
];
export const categoryTipoDeTrabalho: CategoryItem[] = [
  { 
    name: "Perfuração",
    slug: "perfuracao",
    description: "Equipamentos para perfuração",
    icon: Wrench,
    category: "Perfuração"
  },
  { 
    name: "Demolição",
    slug: "demolicao",
    description: "Equipamentos para demolição",
    icon: Wrench,
    category: "Demolição"
  },
  { 
    name: "Pintura",
    slug: "pintura",
    description: "Equipamentos para pintura",
    icon: Wrench,
    category: "Pintura"
  }
];
