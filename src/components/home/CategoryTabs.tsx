
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
