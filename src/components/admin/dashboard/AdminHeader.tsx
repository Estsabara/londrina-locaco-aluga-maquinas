
import { Button } from "@/components/ui/button";
import { Calendar, ArrowDownUp, Settings } from "lucide-react";

export function AdminHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Painel Administrativo</h1>
      
      <div className="flex space-x-2">
        <Button variant="outline" size="sm">
          <Calendar className="mr-2 h-4 w-4" />
          Filtrar por Data
        </Button>
        <Button variant="outline" size="sm">
          <ArrowDownUp className="mr-2 h-4 w-4" />
          Exportar Dados
        </Button>
        <Button variant="default" size="sm">
          <Settings className="mr-2 h-4 w-4" />
          Configurações
        </Button>
      </div>
    </div>
  );
}
