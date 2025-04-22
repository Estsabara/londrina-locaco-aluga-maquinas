
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/context/CartContext";
import { Customer } from "@/types";
import { generateContractText } from "@/utils/contract-utils";

export function useCheckoutSubmit() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { cartItems, getCartTotal } = useCart();

  const handleSubmit = async (customerData: Partial<Customer>, setIsLoading: (loading: boolean) => void) => {
    setIsLoading(true);

    try {
      const { data: customerResult, error: customerError } = await supabase
        .from('customers')
        .insert({
          name: customerData.name,
          email: customerData.email,
          phone: customerData.phone,
          document_number: customerData.document_number,
          address: customerData.address
        })
        .select('id')
        .single();

      if (customerError) throw new Error(customerError.message);

      const fullCustomer: Customer = {
        id: customerResult.id,
        name: customerData.name!,
        email: customerData.email!,
        phone: customerData.phone!,
        document_number: customerData.document_number,
        address: customerData.address!
      };

      const contractText = generateContractText(fullCustomer, cartItems, getCartTotal());

      const serializableCartItems = cartItems.map(item => ({
        product: {
          id: item.product.id,
          name: item.product.name,
          description: item.product.description,
          price: item.product.price,
          imageUrl: item.product.imageUrl,
          category: item.product.category,
          available: item.product.available,
          brand: item.product.brand,
          model: item.product.model,
          specs: item.product.specs
        },
        startDate: item.startDate.toISOString(),
        endDate: item.endDate.toISOString(),
        quantity: item.quantity
      }));

      const { data: contractData, error: contractError } = await supabase
        .from('rental_contracts')
        .insert({
          customer_id: customerResult.id,
          cart_data: serializableCartItems,
          total_amount: getCartTotal(),
          contract_text: contractText,
          status: 'pending'
        })
        .select('id')
        .single();

      if (contractError) throw new Error(contractError.message);

      navigate(`/contrato/${contractData.id}`);
    } catch (error: any) {
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

  return { handleSubmit };
}
