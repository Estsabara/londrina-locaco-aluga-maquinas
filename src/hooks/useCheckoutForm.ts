
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Customer } from "@/types";

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  document_number: string;
  address: string;
}

export function useCheckoutForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<CheckoutFormData>({
    name: '',
    email: '',
    phone: '',
    document_number: '',
    address: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!customer.name || !customer.email || !customer.document_number) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };
  
  return {
    customer,
    handleChange,
    validateForm,
    isLoading,
    setIsLoading
  };
}
