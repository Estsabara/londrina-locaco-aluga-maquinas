
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, FileText } from "lucide-react";
import { formatCurrency } from "@/lib/date-utils";
import { ContractSteps } from "@/components/contract/ContractSteps";
import { ContractTerms } from "@/components/contract/ContractTerms";
import { ContractError } from "@/components/contract/ContractError";
import { useContractDetails } from "@/hooks/useContractDetails";
import { Loader2 } from "lucide-react";

export default function ContractReview() {
  const { 
    contract, 
    loading, 
    error, 
    agreementChecked,
    setAgreementChecked,
    submitting,
    handleAgree
  } = useContractDetails();
  
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
  
  if (error || !contract) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ContractError error={error || "Contrato não encontrado"} />
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
          
          <ContractTerms 
            contract={contract}
            agreementChecked={agreementChecked}
            setAgreementChecked={setAgreementChecked}
            submitting={submitting}
            onAgree={handleAgree}
          />
          
          <div className="bg-card rounded-lg p-6 border mb-6">
            <h2 className="text-xl font-semibold mb-4">Próximos Passos</h2>
            <ContractSteps />
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
