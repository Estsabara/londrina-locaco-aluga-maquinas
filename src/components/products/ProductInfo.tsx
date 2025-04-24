
import React from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { formatCurrency } from "@/lib/date-utils";

interface ProductInfoProps {
  name: string;
  price: number;
  category: string;
  available: boolean;
  description: string;
}

export function ProductInfo({ 
  name, 
  price, 
  category, 
  available, 
  description
}: ProductInfoProps) {
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <Badge>{category}</Badge>
          {available ? (
            <Badge variant="default" className="flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5" />
              Disponível
            </Badge>
          ) : (
            <Badge variant="destructive">Indisponível</Badge>
          )}
        </div>
        <h1 className="text-3xl font-bold mt-2">{name}</h1>
        <div className="flex items-baseline mt-1">
          <span className="text-2xl font-bold">{formatCurrency(price)}</span>
          <span className="text-sm text-muted-foreground ml-1">/diária</span>
        </div>
      </div>
      
      <div>
        <h2 className="font-semibold mb-2">Sobre o equipamento</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </>
  );
}
