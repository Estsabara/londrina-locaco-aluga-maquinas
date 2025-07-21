import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Customer } from "@/types";
import { createWhatsAppLink } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";

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
  const { cartItems, clearCart } = useCart();
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
    if (!customer.name || !customer.email || !customer.phone || !customer.document_number) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      let message = `*Nova Convocação do Arsenal YGG*\n\n`;
      message += `*Dados do Guerreiro:*\n`;
      message += `Nome: ${customer.name}\n`;
      message += `Email: ${customer.email}\n`;
      message += `Telefone: ${customer.phone}\n`;
      message += `Documento: ${customer.document_number}\n`;
      if (customer.address) {
        message += `Endereço: ${customer.address}\n`;
      }
      
      message += `\n*Equipamentos Convocados:*\n`;
      cartItems.forEach(item => {
        message += `\n- ${item.product.name}\n`;
        message += `  Quantidade: ${item.quantity}\n`;
        message += `  Período: ${item.startDate.toLocaleDateString()} até ${item.endDate.toLocaleDateString()}\n`;
        message += `  Tipo de locação: ${item.rentalPeriod === 'daily' ? 'Diária' : 
          item.rentalPeriod === 'weekly' ? 'Semanal' : 
          item.rentalPeriod === 'biweekly' ? 'Quinzenal' : 'Mensal'}\n`;
      });
      
      // Create WhatsApp link and open it
      const whatsappUrl = createWhatsAppLink("554333723860", message);
      window.open(whatsappUrl, '_blank');
      
      // Clear cart and redirect to success page
      clearCart();
      navigate('/sucesso');
    } catch (error) {
      console.error('Erro ao processar checkout:', error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao processar seu pedido. Por favor, tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return {
    customer,
    handleChange,
    validateForm,
    isLoading,
    setIsLoading,
    handleSubmit
  };
}
