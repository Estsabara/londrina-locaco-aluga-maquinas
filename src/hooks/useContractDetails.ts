
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { RentalContract, Customer } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/CartContext";

export function useContractDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { clearCart } = useCart();
  
  const [contract, setContract] = useState<RentalContract | null>(null);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  useEffect(() => {
    async function fetchContract() {
      try {
        if (!id) return;
        
        const { data: contractData, error: contractError } = await supabase
          .from('rental_contracts')
          .select('*')
          .eq('id', id)
          .single();
        
        if (contractError) throw new Error(contractError.message);
        if (!contractData) throw new Error('Contrato não encontrado');
        
        setContract(contractData as unknown as RentalContract);
        
        const { data: customerData, error: customerError } = await supabase
          .from('customers')
          .select('*')
          .eq('id', contractData.customer_id)
          .single();
        
        if (customerError) throw new Error(customerError.message);
        
        setCustomer(customerData as unknown as Customer);
      } catch (err: any) {
        console.error('Erro ao carregar contrato:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchContract();
  }, [id]);

  const handleAgree = async () => {
    if (!agreementChecked || !contract) return;
    
    setSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('rental_contracts')
        .update({
          status: 'agreed',
          agreed_at: new Date().toISOString()
        })
        .eq('id', String(contract.id));
      
      if (error) throw new Error(error.message);
      
      toast({
        title: "Contrato aceito",
        description: "Seu pedido de locação foi confirmado com sucesso!",
      });
      
      clearCart();
      navigate('/sucesso');
    } catch (err: any) {
      console.error('Erro ao aceitar contrato:', err);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao aceitar o contrato. Por favor, tente novamente.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  return {
    contract,
    customer,
    loading,
    error,
    agreementChecked,
    setAgreementChecked,
    submitting,
    handleAgree
  };
}
