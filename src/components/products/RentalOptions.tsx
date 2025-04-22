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
  price: number;
  priceWeekly?: number;
  priceMonthly?: number;
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  rentalTotal: number;
  onAddToCart: () => void;
  rentalPeriod: RentalPeriodType;
  setRentalPeriod: (period: RentalPeriodType) => void;
}

export function RentalOptions({
  available,
  price,
  priceWeekly,
  priceMonthly,
  dateRange,
  setDateRange,
  quantity,
  setQuantity,
  rentalTotal,
  onAddToCart,
  rentalPeriod,
  setRentalPeriod
}: RentalOptionsProps) {
  const handlePeriodChange = (value: string) => {
    setRentalPeriod(value as RentalPeriodType);
    setDateRange({ from: undefined, to: undefined });
  };

  const getPriceLabel = () => {
    switch (rentalPeriod) {
      case "daily":
        return `${formatCurrency(price)}/dia`;
      case "weekly":
        return `${formatCurrency(priceWeekly || price * 6)}/semana`;
      case "monthly":
        return `${formatCurrency(priceMonthly || price * 25)}/mês`;
      default:
        return `${formatCurrency(price)}/dia`;
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="font-semibold">Período de Locação</h2>
      
      <RadioGroup 
        value={rentalPeriod} 
        onValueChange={handlePeriodChange}
        className="grid grid-cols-1 sm:grid-cols-3 gap-2"
      >
        <div className="flex items-center space-x-2 border rounded-md p-2">
          <RadioGroupItem value="daily" id="daily" />
          <Label htmlFor="daily" className="cursor-pointer">Diário</Label>
        </div>
        
        <div className="flex items-center space-x-2 border rounded-md p-2">
          <RadioGroupItem value="weekly" id="weekly" />
          <Label htmlFor="weekly" className="cursor-pointer">Semanal</Label>
        </div>
        
        <div className="flex items-center space-x-2 border rounded-md p-2">
          <RadioGroupItem value="monthly" id="monthly" />
          <Label htmlFor="monthly" className="cursor-pointer">Mensal</Label>
        </div>
      </RadioGroup>
      
      <div className="text-md font-medium text-right">
        {getPriceLabel()}
      </div>
      
      <DateRangePicker 
        dateRange={dateRange}
        setDateRange={setDateRange}
        rentalPeriod={rentalPeriod}
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
