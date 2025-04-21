
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ContractErrorProps {
  error: string;
}

export function ContractError({ error }: ContractErrorProps) {
  return (
    <main className="flex-grow container py-10">
      <Alert variant="destructive" className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Erro</AlertTitle>
        <AlertDescription>
          {error || "Não foi possível carregar o contrato. Por favor, tente novamente."}
        </AlertDescription>
      </Alert>
      <Button asChild>
        <Link to="/carrinho">Voltar ao Carrinho</Link>
      </Button>
    </main>
  );
}
