
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import { formatCurrency } from "@/lib/date-utils";
import { CartSummary } from "@/components/cart/CartSummary";
import { useToast } from "@/hooks/use-toast";
import { Customer } from "@/types";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cartItems, getCartTotal } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const [customer, setCustomer] = useState<Customer>({
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Validate form
      if (!customer.name || !customer.email || !customer.document_number) {
        toast({
          title: "Campos obrigatórios",
          description: "Por favor, preencha todos os campos obrigatórios.",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }
      
      // Create customer in database
      const { data: customerData, error: customerError } = await supabase
        .from('customers')
        .insert([customer])
        .select('id')
        .single();
      
      if (customerError) {
        throw new Error(customerError.message);
      }
      
      // Generate contract text (simplified for now)
      const contractText = generateContractText(customer, cartItems, getCartTotal());
      
      // Create contract in database
      const { data: contractData, error: contractError } = await supabase
        .from('rental_contracts')
        .insert([{
          customer_id: customerData.id,
          cart_data: cartItems,
          total_amount: getCartTotal(),
          contract_text: contractText,
          status: 'pending'
        }])
        .select('id')
        .single();
      
      if (contractError) {
        throw new Error(contractError.message);
      }
      
      // Navigate to contract review page
      navigate(`/contrato/${contractData.id}`);
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
  
  const isEmpty = cartItems.length === 0;
  
  // If cart is empty, redirect to cart page
  if (isEmpty) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container py-10">
          <div className="text-center py-16 space-y-4">
            <h2 className="text-2xl font-semibold">Seu carrinho está vazio</h2>
            <p className="text-muted-foreground">
              Adicione equipamentos ao carrinho para continuar com a locação.
            </p>
            <Button asChild className="mt-4">
              <Link to="/produtos">
                Ver Equipamentos
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container py-10">
        <div className="mb-6">
          <Button asChild variant="ghost" className="pl-0">
            <Link to="/carrinho" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o Carrinho
            </Link>
          </Button>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 flex items-center">
            <ShoppingCart className="mr-3 h-6 w-6" />
            Checkout
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg p-6 border">
                <h2 className="text-xl font-semibold mb-4">Seus Dados</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nome Completo <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={customer.name}
                      onChange={handleChange}
                      placeholder="Digite seu nome completo"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={customer.email}
                      onChange={handleChange}
                      placeholder="Digite seu email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={customer.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="document_number" className="block text-sm font-medium mb-1">
                      CPF ou CNPJ <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="document_number"
                      name="document_number"
                      value={customer.document_number}
                      onChange={handleChange}
                      placeholder="Digite seu CPF ou CNPJ"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium mb-1">
                      Endereço Completo
                    </label>
                    <Textarea
                      id="address"
                      name="address"
                      value={customer.address}
                      onChange={handleChange}
                      placeholder="Rua, número, bairro, cidade, estado, CEP"
                      rows={3}
                    />
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    <p>Campos com <span className="text-destructive">*</span> são obrigatórios.</p>
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading ? "Processando..." : "Continuar para Revisão do Contrato"}
                    {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

// Function to generate contract text
function generateContractText(customer: Customer, cartItems: any[], totalAmount: number): string {
  const today = new Date().toLocaleDateString('pt-BR');
  const items = cartItems.map(item => {
    const days = Math.ceil(
      (item.endDate.getTime() - item.startDate.getTime()) / (1000 * 60 * 60 * 24)
    ) + 1;
    
    return `- ${item.product.name} (${item.product.brand} ${item.product.model}): ${item.quantity} unidade(s) por ${days} dias, de ${item.startDate.toLocaleDateString('pt-BR')} até ${item.endDate.toLocaleDateString('pt-BR')}.`;
  }).join('\n');
  
  return `CONTRATO DE LOCAÇÃO DE EQUIPAMENTOS

DATA: ${today}

PARTES:

LOCADORA: Londrina Locações, empresa inscrita no CNPJ sob o nº XX.XXX.XXX/0001-XX, com sede na Cidade de Londrina, Estado do Paraná, doravante denominada LOCADORA.

LOCATÁRIO: ${customer.name}, portador do documento nº ${customer.document_number}, residente em ${customer.address || 'endereço não informado'}, telefone ${customer.phone || 'não informado'}, e-mail ${customer.email}, doravante denominado LOCATÁRIO.

OBJETO DO CONTRATO:

O presente contrato tem por objeto a locação dos seguintes equipamentos:

${items}

VALOR TOTAL DA LOCAÇÃO: ${formatCurrency(totalAmount)}

CONDIÇÕES GERAIS:

1. O LOCATÁRIO se compromete a devolver os equipamentos nas mesmas condições em que foram recebidos, responsabilizando-se por eventuais danos ou perdas.

2. O prazo de locação será aquele especificado para cada equipamento, podendo ser prorrogado mediante comunicação prévia e pagamento do valor correspondente.

3. O LOCATÁRIO deverá apresentar documentação (RG, CPF, comprovante de residência) na retirada do equipamento.

4. Será cobrada uma caução que será devolvida após a verificação do estado do equipamento.

5. O combustível não está incluso no valor da locação para equipamentos a combustão.

6. Em caso de danos, a caução poderá ser retida para reparos.

7. O pagamento será feito na retirada dos equipamentos.

Este contrato entra em vigor na data de sua assinatura.
`;
}
