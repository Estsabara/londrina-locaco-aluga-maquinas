
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export function RentalTerms() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="rental-terms">
        <AccordionTrigger className="text-xl font-semibold">
          Termos de Locação
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 py-4">
            <p className="text-muted-foreground">
              A locação dos equipamentos da Londrina Locações está sujeita aos seguintes termos:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>É necessário apresentar documentação (RG, CPF, comprovante de residência) na retirada do equipamento;</li>
              <li>O locatário é responsável pela integridade do equipamento durante o período de locação;</li>
              <li>O prazo de locação começa a contar a partir da data de retirada;</li>
              <li>Será cobrada uma caução que será devolvida após a verificação do estado do equipamento;</li>
              <li>Em caso de danos, a caução poderá ser retida para reparos;</li>
              <li>O combustível não está incluso no valor da locação para equipamentos a combustão.</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
