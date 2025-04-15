
import { useState } from "react";
import { CategoryCard, CategoryCardProps } from "./CategoryCard";
import { 
  Hammer, 
  Construction, 
  Drill, 
  Forklift,
  Truck,
  Layers,
  LucideIcon
} from "lucide-react";

interface CategoryTabsProps {
  onCategorySelect: (category: string) => void;
}

export function CategoryTabs({ onCategorySelect }: CategoryTabsProps) {
  const [selectedTab, setSelectedTab] = useState("Mais alugados");
  
  const categoryCards: CategoryCardProps[] = [
    { 
      name: "Andaimes",
      icon: Layers,
      color: "bg-primary text-primary-foreground",
      category: "Andaimes e Acessórios"
    },
    { 
      name: "Compactação",
      icon: Hammer,
      color: "bg-primary text-primary-foreground",
      category: "Compactação de Solo"
    },
    { 
      name: "Concretagem",
      icon: Construction,
      color: "bg-primary text-primary-foreground",
      category: "Concretagem e Mistura"
    },
    { 
      name: "Ferramentas elétricas",
      icon: Drill,
      color: "bg-primary text-primary-foreground",
      category: "Perfuração e Demolição"
    },
    { 
      name: "Furação e demolição",
      icon: Drill,
      color: "bg-primary text-primary-foreground",
      category: "Perfuração e Demolição"
    },
    { 
      name: "Acesso e elevação",
      icon: Forklift,
      color: "bg-primary text-primary-foreground",
      category: "Movimentação e Elevação"
    },
    { 
      name: "Limpeza",
      icon: Truck,
      color: "bg-primary text-primary-foreground",
      category: "Equipamentos de Limpeza"
    },
    { 
      name: "Outros",
      icon: Construction,
      color: "bg-primary text-primary-foreground",
      category: "Equipamentos Diversos"
    }
  ];

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Equipamentos e ferramentas para locação
        </h2>
        
        <div className="flex border-b mb-8 overflow-x-auto">
          {["Mais alugados", "Fases da obra", "Tipo de trabalho"].map((tab) => (
            <div 
              key={tab}
              className={`category-tab ${selectedTab === tab ? 'active' : ''}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categoryCards.map((card, index) => (
            <CategoryCard 
              key={index} 
              {...card} 
              onClick={() => onCategorySelect(card.category)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
