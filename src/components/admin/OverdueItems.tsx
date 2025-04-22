
import { AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useOverdueRentals } from "@/hooks/useOverdueRentals";
import { OverdueRentalsList } from "./overdue/OverdueRentalsList";

export default function OverdueItems() {
  const { rentals, loading, fetchRentals, updateRentalStatus } = useOverdueRentals();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
          <h2 className="text-2xl font-bold">Itens com Devolução Atrasada</h2>
        </div>
        <Button variant="outline" onClick={fetchRentals}>
          Atualizar
        </Button>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : rentals.length > 0 ? (
        <OverdueRentalsList 
          rentals={rentals}
          onUpdateStatus={updateRentalStatus}
        />
      ) : (
        <div className="text-center py-10 bg-green-50 rounded-lg">
          <CheckCircle className="h-12 w-12 mx-auto text-green-500 mb-2" />
          <p className="text-lg font-medium text-green-800">Não há itens com devolução atrasada.</p>
          <p className="text-muted-foreground">Todos os itens estão sendo devolvidos dentro do prazo.</p>
        </div>
      )}
    </div>
  );
}
