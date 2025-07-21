
import { useState } from "react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { CategoryTabContent } from "./CategoryTabContent";
import { 
  categoryMaisAlugados,
  categoryFasesDaObra,
  categoryTipoDeTrabalho
} from "./categoryData";

interface CategoryTabsProps {
  onCategorySelect: (category: string) => void;
}

export function CategoryTabs({ onCategorySelect }: CategoryTabsProps) {
  const [selectedTab, setSelectedTab] = useState("mais-alugados");
  
  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <section className="py-4 md:py-8 w-full overflow-hidden">
      <div className="container px-2 md:px-6">
        <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-center px-2">
          <span className="nordic-title text-nordic-deep">Arsenal de Ferramentas Ancestrais</span>
        </h2>
        
        <Tabs value={selectedTab} onValueChange={handleTabChange} className="w-full">
          <div className="overflow-x-auto pb-1">
            <TabsList className="w-full flex justify-between mb-4 md:mb-6 border-b border-nordic-gold/30 overflow-x-visible bg-nordic-ice">
              <TabsTrigger 
                value="mais-alugados" 
                className="flex-1 pb-2 data-[state=active]:border-b-2 data-[state=active]:border-nordic-gold rounded-none text-xs md:text-base whitespace-nowrap px-1 sm:px-2 data-[state=active]:text-nordic-deep"
              >
                Mais Convocados
              </TabsTrigger>
              <TabsTrigger 
                value="fases-da-obra" 
                className="flex-1 pb-2 data-[state=active]:border-b-2 data-[state=active]:border-nordic-gold rounded-none text-xs md:text-base whitespace-nowrap px-1 sm:px-2 data-[state=active]:text-nordic-deep"
              >
                Etapas da Forja
              </TabsTrigger>
              <TabsTrigger 
                value="tipo-de-trabalho" 
                className="flex-1 pb-2 data-[state=active]:border-b-2 data-[state=active]:border-nordic-gold rounded-none text-xs md:text-base whitespace-nowrap px-1 sm:px-2 data-[state=active]:text-nordic-deep"
              >
                Tipo de Batalha
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="mais-alugados" className="mt-0">
            <CategoryTabContent 
              categories={categoryMaisAlugados} 
              onCategorySelect={onCategorySelect} 
            />
          </TabsContent>
          
          <TabsContent value="fases-da-obra" className="mt-0">
            <CategoryTabContent 
              categories={categoryFasesDaObra} 
              onCategorySelect={onCategorySelect} 
            />
          </TabsContent>
          
          <TabsContent value="tipo-de-trabalho" className="mt-0">
            <CategoryTabContent 
              categories={categoryTipoDeTrabalho} 
              onCategorySelect={onCategorySelect} 
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
