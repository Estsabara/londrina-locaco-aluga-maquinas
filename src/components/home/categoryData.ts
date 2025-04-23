
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
    name: "Movimentação",
    slug: "movimentacao",
    description: "Equipamentos para movimentação",
    icon: Wrench,
    category: "Movimentação"
  },
  { 
    name: "Compactação",
    slug: "compactacao",
    description: "Equipamentos para compactação",
    icon: Wrench,
    category: "Compactação"
  },
  { 
    name: "Demolição",
    slug: "demolicao",
    description: "Equipamentos para demolição",
    icon: Wrench,
    category: "Demolição"
  },
  { 
    name: "Concretagem",
    slug: "concretagem",
    description: "Equipamentos para concretagem",
    icon: Wrench,
    category: "Concretagem"
  },
  { 
    name: "Limpeza",
    slug: "limpeza",
    description: "Equipamentos para limpeza",
    icon: Wrench,
    category: "Limpeza"
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
  },
  { 
    name: "Energia",
    slug: "energia",
    description: "Geradores e equipamentos de energia",
    icon: Wrench,
    category: "Energia"
  },
  { 
    name: "Escoramentos",
    slug: "escoramentos",
    description: "Equipamentos para escoramentos",
    icon: Wrench,
    category: "Escoramentos"
  }
];
