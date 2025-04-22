
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { RentalContract } from "@/types";
import { toast } from "sonner";
import { differenceInDays } from "date-fns";

export const useOverdueRentals = () => {
  const [rentals, setRentals] = useState<RentalContract[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRentals = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("rental_contracts")
        .select(`
          *,
          customers:customer_id (id, name, email, phone)
        `)
        .in("status", ["active", "overdue"])
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      // Filter to only get overdue rentals
      const today = new Date();
      const overdueRentals = (data as RentalContract[] || []).filter(rental => {
        const cartData = rental.cart_data as any[];
        if (!cartData?.length) return false;
        
        return cartData.some(item => {
          const endDate = item.endDate ? new Date(item.endDate) : null;
          return endDate && endDate < today;
        });
      });
      
      // Update status to overdue in the database
      for (const rental of overdueRentals) {
        if (rental.status !== 'overdue') {
          await supabase
            .from("rental_contracts")
            .update({ status: 'overdue' })
            .eq("id", String(rental.id));
            
          rental.status = 'overdue';
        }
      }
      
      setRentals(overdueRentals);
    } catch (error) {
      console.error("Error fetching overdue rentals:", error);
      toast.error("Erro ao carregar itens atrasados");
    } finally {
      setLoading(false);
    }
  };

  const updateRentalStatus = async (id: string | number, status: string) => {
    try {
      const { error } = await supabase
        .from("rental_contracts")
        .update({ status })
        .eq("id", String(id));
      
      if (error) throw error;
      
      fetchRentals();
      toast.success(`Status atualizado para ${status}`);
    } catch (error) {
      console.error("Error updating rental status:", error);
      toast.error("Erro ao atualizar status");
    }
  };

  useEffect(() => {
    fetchRentals();
    
    const interval = setInterval(() => {
      fetchRentals();
    }, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return {
    rentals,
    loading,
    fetchRentals,
    updateRentalStatus
  };
};
