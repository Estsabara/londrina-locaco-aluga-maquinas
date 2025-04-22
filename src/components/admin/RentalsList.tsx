
import { useEffect } from "react";
import { useRentalsList } from "@/hooks/useRentalsList";
import { RentalFilters } from "./rentals/RentalFilters";
import { RentalsTable } from "./rentals/RentalsTable";

export default function RentalsList() {
  const {
    rentals,
    loading,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    fetchRentals,
    updateRentalStatus
  } = useRentalsList();

  useEffect(() => {
    fetchRentals();
  }, []);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">Aluguéis Registrados</h2>
        <RentalFilters 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : rentals.length > 0 ? (
        <RentalsTable 
          rentals={rentals}
          onUpdateStatus={updateRentalStatus}
        />
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground">Nenhum aluguel encontrado.</p>
        </div>
      )}
    </div>
  );
}
