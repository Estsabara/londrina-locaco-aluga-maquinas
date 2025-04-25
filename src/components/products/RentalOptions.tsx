import React from "react";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Info, ShoppingCart } from "lucide-react";
import { formatCurrency } from "@/lib/date-utils";
import { DateRange, RentalPeriodType } from "@/types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface RentalOptionsProps {
  available: boolean;
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  onAddToCart: () => void;
  rentalPeriod: RentalPeriodType;
  setRentalPeriod: (period: RentalPeriodType) => void;
  periodQuantity: number;
  setPeriodQuantity: (quantity: number) => void;
}

export function RentalOptions({
  available,
  dateRange,
  setDateRange,
  quantity,
  setQuantity,
  onAddToCart,
  rentalPeriod,
  setRentalPeriod,
  periodQuantity,
  setPeriodQuantity
}: RentalOptionsProps) {
  const handlePeriodChange = (value: string) => {
    setRentalPeriod(value as RentalPeriodType);
  };

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-lg">Configurar Locação</h2>
      
      {/* Step 1: Quantity */}
      <div className="space-y-2 p-4 border rounded-md bg-gray-50">
        <Label htmlFor="quantity" className="text-sm font-medium flex items-center">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs mr-2">1</div>
          Quantidade
        </Label>
        <Input 
          id="quantity" 
          type="number" 
          min={1} 
          value={quantity} 
          onChange={e => setQuantity(parseInt(e.target.value) || 1)} 
          className="max-w-[200px]" 
        />
      </div>
      
      {/* Step 2: Rental Period Type */}
      <div className="space-y-4 p-4 border rounded-md bg-gray-50">
        <Label className="text-sm font-medium flex items-center">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs mr-2">2</div>
          Período de Locação
        </Label>
        <RadioGroup value={rentalPeriod} onValueChange={handlePeriodChange} className="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <div className="flex items-center space-x-2 border rounded-md p-2">
            <RadioGroupItem value="daily" id="daily" />
            <Label htmlFor="daily" className="cursor-pointer">Diário</Label>
          </div>
          
          <div className="flex items-center space-x-2 border rounded-md p-2">
            <RadioGroupItem value="weekly" id="weekly" />
            <Label htmlFor="weekly" className="cursor-pointer">Semanal</Label>
          </div>
          
          <div className="flex items-center space-x-2 border rounded-md p-2">
            <RadioGroupItem value="biweekly" id="biweekly" />
            <Label htmlFor="biweekly" className="cursor-pointer">Quinzenal</Label>
          </div>
          
          <div className="flex items-center space-x-2 border rounded-md p-2">
            <RadioGroupItem value="monthly" id="monthly" />
            <Label htmlFor="monthly" className="cursor-pointer">Mensal</Label>
          </div>
        </RadioGroup>
      </div>
      
      {/* Step 3: Pick-up Date */}
      <div className="space-y-2 p-4 border rounded-md bg-gray-50">
        <Label className="text-sm font-medium flex items-center">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs mr-2">3</div>
          Data de Retirada
        </Label>
        <DateRangePicker 
          dateRange={dateRange} 
          setDateRange={setDateRange} 
          rentalPeriod={rentalPeriod} 
          periodQuantity={periodQuantity} 
          setPeriodQuantity={setPeriodQuantity} 
        />
      </div>

      <Button 
        onClick={onAddToCart} 
        disabled={!available || !dateRange || !dateRange.from || !dateRange.to} 
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
