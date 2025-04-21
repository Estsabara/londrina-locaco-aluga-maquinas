
import { Check } from "lucide-react";

export function ContractSteps() {
  return (
    <div className="space-y-4 text-left">
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <span className="font-bold">1</span>
        </div>
        <div>
          <h3 className="font-medium">Retirada dos Equipamentos</h3>
          <p className="text-sm text-muted-foreground">
            Compareça ao nosso depósito com a documentação necessária (RG, CPF e comprovante de residência atualizado).
          </p>
        </div>
      </div>
      
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <span className="font-bold">2</span>
        </div>
        <div>
          <h3 className="font-medium">Pagamento e Caução</h3>
          <p className="text-sm text-muted-foreground">
            O pagamento será feito no momento da retirada. Será solicitada uma caução que será devolvida após a devolução dos equipamentos em bom estado.
          </p>
        </div>
      </div>
      
      <div className="flex gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <span className="font-bold">3</span>
        </div>
        <div>
          <h3 className="font-medium">Utilização e Devolução</h3>
          <p className="text-sm text-muted-foreground">
            Utilize os equipamentos conforme orientações e devolva-os na data acordada para evitar taxas adicionais.
          </p>
        </div>
      </div>
    </div>
  );
}
