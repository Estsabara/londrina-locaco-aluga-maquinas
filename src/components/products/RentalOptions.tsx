
import React from "react";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Info, ShoppingCart } from "lucide-react";
import { formatCurrency } from "@/lib/date-utils";
import { DateRange } from "@/types";

interface RentalOptionsProps {
  available: boolean;
  price: number;
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  rentalTotal: number;
  onAddToCart: () => void;
}

export function RentalOptions({
  available,
  price,
  dateRange,
  setDateRange,
  quantity,
  setQuantity,
  rentalTotal,
  onAddToCart
}: RentalOptionsProps) {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold">Período de Locação</h2>
      <DateRangePicker 
        dateRange={dateRange}
        setDateRange={setDateRange}
      />
      
      <div className="grid grid-cols-2 gap-4 items-center">
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium mb-1">
            Quantidade
          </label>
          <Input
            id="quantity"
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          />
        </div>
        <div>
          {dateRange.from && dateRange.to && (
            <div className="flex flex-col items-end">
              <span className="text-sm text-muted-foreground">Valor Total</span>
              <span className="text-2xl font-bold">{formatCurrency(rentalTotal)}</span>
            </div>
          )}
        </div>
      </div>
      
      <Button 
        onClick={onAddToCart} 
        disabled={!available || !dateRange.from || !dateRange.to}
        className="w-full"
        size="lg"
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        Adicionar ao Carrinho
      </Button>
      
      <div className="flex items-center p-3 bg-muted rounded-md text-sm">
        <Info className="h-4 w-4 mr-2 flex-shrink-0" />
        <p>A retirada e devolução do equipamento deve ser feita em nosso depósito. Solicite orçamento para entrega.</p>
      </div>
    </div>
  );
}
