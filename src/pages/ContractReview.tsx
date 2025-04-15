
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { RentalContract, Customer } from "@/types";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, Check, FileText, Loader2 } from "lucide-react";
import { formatCurrency } from "@/lib/date-utils";
import { useCart } from "@/context/CartContext";

export default function ContractReview() {
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
        .eq('id', contract.id);
      
      if (error) throw new Error(error.message);
      
      toast({
        title: "Contrato aceito",
        description: "Seu pedido de locação foi confirmado com sucesso!",
      });
      
      // Clear the cart after successful checkout
      clearCart();
      
      // Navigate to success page
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
  
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container py-10 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-10 w-10 animate-spin mx-auto mb-4 text-primary" />
            <h2 className="text-xl font-medium">Carregando contrato...</h2>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (error || !contract || !customer) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container py-10">
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Erro</AlertTitle>
            <AlertDescription>
              {error || "Não foi possível carregar o contrato. Por favor, tente novamente."}
            </AlertDescription>
          </Alert>
          <Button onClick={() => navigate('/carrinho')}>
            Voltar ao Carrinho
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold flex items-center">
              <FileText className="mr-3 h-6 w-6" />
              Revisão do Contrato
            </h1>
            <div className="text-sm px-3 py-1 bg-muted rounded-full">
              Total: {formatCurrency(contract.total_amount)}
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 border mb-6">
            <h2 className="text-xl font-semibold mb-4">Termos do Contrato</h2>
            
            <div className="border rounded-md bg-muted/50 p-4">
              <pre className="whitespace-pre-wrap font-sans text-sm">
                {contract.contract_text}
              </pre>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 border mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox 
                id="agree" 
                checked={agreementChecked}
                onCheckedChange={(checked) => setAgreementChecked(checked as boolean)}
              />
              <label
                htmlFor="agree"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Eu li e concordo com os termos do contrato acima
              </label>
            </div>
            
            <Button 
              onClick={handleAgree} 
              disabled={!agreementChecked || submitting} 
              className="w-full"
              size="lg"
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processando...
                </>
              ) : (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Aceitar e Finalizar Locação
                </>
              )}
            </Button>
          </div>
          
          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Importante</AlertTitle>
            <AlertDescription>
              Ao aceitar o contrato, você concorda com os termos de locação e se compromete a retirar os equipamentos no local indicado, apresentando a documentação necessária.
            </AlertDescription>
          </Alert>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
