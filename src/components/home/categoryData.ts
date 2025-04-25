
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
  },
  { 
    name: "Limpeza",
    slug: "limpeza",
    description: "Equipamentos de limpeza",
    icon: Wrench,
    category: "Limpeza"
  },
  { 
    name: "Motores",
    slug: "motores",
    description: "Motores e geradores",
    icon: Wrench,
    category: "Motores"
  },
  { 
    name: "Escoramentos",
    slug: "escoramentos",
    description: "Escoramentos metálicos",
    icon: Wrench,
    category: "Escoramentos"
  },
  { 
    name: "Perfuração",
    slug: "perfuracao",
    description: "Equipamentos para perfuração",
    icon: Wrench,
    category: "Perfuração"
  }
];

// Creating the category groups that CategoryTabs needs
export const categoryMaisAlugados: CategoryItem[] = categoryData.slice(0, 5);
export const categoryFasesDaObra: CategoryItem[] = [
  categoryData[0], // Andaimes
  categoryData[1], // Acesso e Elevação
  categoryData[3], // Concretagem
  categoryData[8], // Escoramentos
  categoryData[9]  // Perfuração
];
export const categoryTipoDeTrabalho: CategoryItem[] = [
  categoryData[2], // Compactação
  categoryData[4], // Jardinagem
  categoryData[5], // Ferramentas Elétricas
  categoryData[6], // Limpeza
  categoryData[7]  // Motores
];
