
import { Search, Filter, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface InventoryHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function InventoryHeader({ searchTerm, onSearchChange }: InventoryHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      <h2 className="text-2xl font-bold">Gerenciamento de Estoque</h2>
      
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar produtos..."
            className="pl-8 w-full sm:w-[250px]"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <Button variant="outline" size="sm" className="hidden sm:flex">
          <Filter className="mr-2 h-4 w-4" />
          Filtrar
        </Button>
        <Button variant="default" size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Item
        </Button>
      </div>
    </div>
  );
}
