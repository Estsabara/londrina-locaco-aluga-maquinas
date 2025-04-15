
import { useState } from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { CategoryCard, CategoryCardProps } from "./CategoryCard";
import { 
  Brush, 
  Building, 
  Construction,
  Drill,
  Forklift,
  Hammer,
  Laptop,
  Layers,
  Lightbulb,
  PaintRoller,
  RotateCcw,
  Scissors,
  Square,
  Trash2,
  Truck,
  Droplets,  // Changed from Water to Droplets
  Zap,
  Wrench,
  LucideIcon
} from "lucide-react";

interface CategoryTabsProps {
  onCategorySelect: (category: string) => void;
}

export function CategoryTabs({ onCategorySelect }: CategoryTabsProps) {
  const [selectedTab, setSelectedTab] = useState("mais-alugados");
  
  const categoryMaisAlugados: CategoryCardProps[] = [
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
      icon: Droplets,  // Changed from Water to Droplets
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

  const categoryFasesDaObra: CategoryCardProps[] = [
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

  const categoryTipoDeTrabalho: CategoryCardProps[] = [
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

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  const handleCategorySelect = (category: string) => {
    onCategorySelect(category);
  };

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Equipamentos e ferramentas para locação
        </h2>
        
        <Tabs value={selectedTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="w-full flex justify-between mb-8 border-b border-gray-200">
            <TabsTrigger value="mais-alugados" className="flex-1 pb-2 data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none">
              Mais alugados
            </TabsTrigger>
            <TabsTrigger value="fases-da-obra" className="flex-1 pb-2 data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none">
              Fases da obra
            </TabsTrigger>
            <TabsTrigger value="tipo-de-trabalho" className="flex-1 pb-2 data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none">
              Tipo de trabalho
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="mais-alugados" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {categoryMaisAlugados.map((card, index) => (
                <CategoryCard 
                  key={index} 
                  {...card} 
                  onClick={() => handleCategorySelect(card.category)} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="fases-da-obra" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {categoryFasesDaObra.map((card, index) => (
                <CategoryCard 
                  key={index} 
                  {...card} 
                  onClick={() => handleCategorySelect(card.category)} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tipo-de-trabalho" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {categoryTipoDeTrabalho.map((card, index) => (
                <CategoryCard 
                  key={index} 
                  {...card} 
                  onClick={() => handleCategorySelect(card.category)} 
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
