
import { LucideIcon } from "lucide-react";
import { 
  Brush, 
  Building, 
  Construction,
  Drill,
  Forklift,
  Hammer,
  Layers,
  Lightbulb,
  PaintRoller,
  RotateCcw,
  Scissors,
  Square,
  Trash2,
  Truck,
  Droplets,
  Zap,
  Wrench,
  Laptop
} from "lucide-react";
import { CategoryCardProps } from "./CategoryCard";

export const categoryMaisAlugados: CategoryCardProps[] = [
  { 
    name: "Limpar",
    icon: Trash2,
    color: "bg-primary",
    category: "Equipamentos de Limpeza"
  },
  { 
    name: "Trabalho em altura ou elevar",
    icon: Forklift,
    color: "bg-primary",
    category: "Movimentação e Elevação"
  },
  { 
    name: "Trabalho em jardins",
    icon: Brush,
    color: "bg-primary",
    category: "Jardinagem"
  },
  { 
    name: "Cortar, furar ou demolir",
    icon: Drill,
    color: "bg-primary",
    category: "Perfuração e Demolição"
  },
  { 
    name: "Concretar, argamassa",
    icon: Truck,
    color: "bg-primary",
    category: "Concretagem e Mistura"
  },
  { 
    name: "Gerar energia elétrica",
    icon: Zap,
    color: "bg-primary",
    category: "Geradores"
  },
  { 
    name: "Escorar lajes ou vigas",
    icon: Layers,
    color: "bg-primary",
    category: "Estrutura e Alvenaria"
  },
  { 
    name: "Bombear água ou lama",
    icon: Droplets,
    color: "bg-primary",
    category: "Equipamentos de Bombeamento"
  },
  { 
    name: "Aplainar ou lixar",
    icon: Wrench,
    color: "bg-primary",
    category: "Ferramentas Manuais"
  },
  { 
    name: "Compactar o solo",
    icon: Hammer,
    color: "bg-primary",
    category: "Compactação de Solo"
  }
];

export const categoryFasesDaObra: CategoryCardProps[] = [
  { 
    name: "Canteiro de obras",
    icon: Construction,
    color: "bg-primary",
    category: "Canteiro de Obras"
  },
  { 
    name: "Cobertura",
    icon: Layers,
    color: "bg-primary",
    category: "Cobertura"
  },
  { 
    name: "Fundação",
    icon: Building,
    color: "bg-primary",
    category: "Fundação"
  },
  { 
    name: "Estrutura e alvenaria",
    icon: Construction,
    color: "bg-primary",
    category: "Estrutura e Alvenaria"
  },
  { 
    name: "Inst. elétricas e hidrossanitárias",
    icon: Zap,
    color: "bg-primary",
    category: "Instalações"
  },
  { 
    name: "Esquadrias",
    icon: Square,
    color: "bg-primary",
    category: "Esquadrias"
  },
  { 
    name: "Revestimento",
    icon: PaintRoller,
    color: "bg-primary",
    category: "Revestimento"
  },
  { 
    name: "Acabamento",
    icon: Brush,
    color: "bg-primary",
    category: "Acabamento"
  },
  { 
    name: "Jardinagem",
    icon: Scissors,
    color: "bg-primary",
    category: "Jardinagem"
  },
  { 
    name: "Limpeza",
    icon: Trash2,
    color: "bg-primary",
    category: "Equipamentos de Limpeza"
  }
];

export const categoryTipoDeTrabalho: CategoryCardProps[] = [
  { 
    name: "Acesso e elevação",
    icon: Forklift,
    color: "bg-primary",
    category: "Movimentação e Elevação"
  },
  { 
    name: "Andaimes",
    icon: Layers,
    color: "bg-primary",
    category: "Andaimes e Acessórios"
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
    category: "Ferramentas Elétricas"
  },
  { 
    name: "Furação e demolição",
    icon: Drill,
    color: "bg-primary",
    category: "Perfuração e Demolição"
  },
  { 
    name: "Jardinagem",
    icon: Scissors,
    color: "bg-primary",
    category: "Jardinagem"
  },
  { 
    name: "Limpeza",
    icon: Trash2,
    color: "bg-primary",
    category: "Equipamentos de Limpeza"
  },
  { 
    name: "Motores",
    icon: Zap,
    color: "bg-primary",
    category: "Motores"
  },
  { 
    name: "Outros",
    icon: Wrench,
    color: "bg-primary",
    category: "Equipamentos Diversos"
  }
];
