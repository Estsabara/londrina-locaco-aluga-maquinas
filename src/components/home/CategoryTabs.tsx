
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
          Equipamentos e ferramentas para locação
        </h2>
        
        <Tabs value={selectedTab} onValueChange={handleTabChange} className="w-full">
          <div className="overflow-x-auto pb-1">
            <TabsList className="w-full flex justify-between mb-4 md:mb-6 border-b border-gray-200 overflow-x-visible">
              <TabsTrigger 
                value="mais-alugados" 
                className="flex-1 pb-2 data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none text-xs md:text-base whitespace-nowrap px-1 sm:px-2"
              >
                Mais alugados
              </TabsTrigger>
              <TabsTrigger 
                value="fases-da-obra" 
                className="flex-1 pb-2 data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none text-xs md:text-base whitespace-nowrap px-1 sm:px-2"
              >
                Fases da obra
              </TabsTrigger>
              <TabsTrigger 
                value="tipo-de-trabalho" 
                className="flex-1 pb-2 data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none text-xs md:text-base whitespace-nowrap px-1 sm:px-2"
              >
                Tipo de trabalho
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
