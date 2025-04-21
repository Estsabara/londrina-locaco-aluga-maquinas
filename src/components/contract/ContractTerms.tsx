
import { RentalContract } from "@/types";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from "lucide-react";

interface ContractTermsProps {
  contract: RentalContract;
  agreementChecked: boolean;
  setAgreementChecked: (checked: boolean) => void;
  submitting: boolean;
  onAgree: () => void;
}

export function ContractTerms({ 
  contract,
  agreementChecked,
  setAgreementChecked,
  submitting,
  onAgree
}: ContractTermsProps) {
  return (
    <div className="bg-card rounded-lg p-6 border mb-6">
      <h2 className="text-xl font-semibold mb-4">Termos do Contrato</h2>
      
      <div className="border rounded-md bg-muted/50 p-4">
        <pre className="whitespace-pre-wrap font-sans text-sm">
          {contract.contract_text}
        </pre>
      </div>

      <div className="flex items-center space-x-2 mb-4 mt-4">
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
        onClick={onAgree} 
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
  );
}
