
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { RentalContract } from "@/types";
import { toast } from "sonner";

export const useRentalsList = () => {
  const [rentals, setRentals] = useState<RentalContract[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchRentals = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("rental_contracts")
        .select(`
          *,
          customers:customer_id (id, name, email, phone)
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      setRentals(data as RentalContract[] || []);
    } catch (error) {
      console.error("Error fetching rentals:", error);
      toast.error("Erro ao carregar aluguéis");
    } finally {
      setLoading(false);
    }
  };

  const updateRentalStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("rental_contracts")
        .update({ status })
        .eq("id", id);
      
      if (error) throw error;
      
      fetchRentals();
      toast.success(`Status atualizado para ${status}`);
    } catch (error) {
      console.error("Error updating rental status:", error);
      toast.error("Erro ao atualizar status");
    }
  };

  const filteredRentals = rentals.filter(rental => {
    const customerName = rental.customers?.name?.toLowerCase() || '';
    const matchesSearch = customerName.includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || rental.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return {
    rentals: filteredRentals,
    loading,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    fetchRentals,
    updateRentalStatus
  };
};
