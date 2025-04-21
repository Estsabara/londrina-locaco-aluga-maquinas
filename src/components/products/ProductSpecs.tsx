
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

interface ProductSpecsProps {
  specs: Record<string, any>;
}

export function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="specs">
        <AccordionTrigger className="text-xl font-semibold">
          Especificações Técnicas
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            {Object.entries(specs).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b pb-2">
                <span className="font-medium capitalize">{key}:</span>
                <span>{String(value)}</span>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
