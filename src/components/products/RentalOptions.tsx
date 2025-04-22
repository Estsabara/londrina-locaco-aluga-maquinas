
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
  periodQuantity: number;
  setPeriodQuantity: (quantity: number) => void;
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
  setRentalPeriod,
  periodQuantity,
  setPeriodQuantity
}: RentalOptionsProps) {
  const handlePeriodChange = (value: string) => {
    setRentalPeriod(value as RentalPeriodType);
  };

  const getPriceDisplay = () => {
    switch (rentalPeriod) {
      case "daily":
        return `${formatCurrency(price)}/dia`;
      case "weekly": {
        const weeklyPrice = priceWeekly || price * 6;
        const discountedWeeklyPrice = weeklyPrice * 0.95;
        return (
          <div className="flex flex-col items-end">
            <span>{formatCurrency(discountedWeeklyPrice)}/semana</span>
            <span className="text-green-600 text-sm mt-1">5% OFF</span>
          </div>
        );
      }
      case "monthly": {
        const monthlyPrice = priceMonthly || price * 25;
        const discountedMonthlyPrice = monthlyPrice * 0.90;
        return (
          <div className="flex flex-col items-end">
            <span>{formatCurrency(discountedMonthlyPrice)}/mês</span>
            <span className="text-green-600 text-sm mt-1">10% OFF</span>
          </div>
        );
      }
      default:
        return `${formatCurrency(price)}/dia`;
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-lg">Configurar Locação</h2>
      
      {/* Step 1: Quantity */}
      <div className="space-y-2">
        <Label htmlFor="quantity" className="text-sm font-medium">
          1. Quantidade
        </Label>
        <Input
          id="quantity"
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          className="max-w-[200px]"
        />
      </div>
      
      {/* Step 2: Rental Period Type and Quantity */}
      <div className="space-y-4">
        <Label className="text-sm font-medium">
          2. Período de Locação
        </Label>
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

        <div className="space-y-2">
          <Label htmlFor="periodQuantity" className="text-sm font-medium block">
            Quantidade de {rentalPeriod === 'daily' ? 'dias' : rentalPeriod === 'weekly' ? 'semanas' : 'meses'}
          </Label>
          <Input
            id="periodQuantity"
            type="number"
            min={1}
            value={periodQuantity}
            onChange={(e) => setPeriodQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="max-w-[200px]"
          />
        </div>
      </div>
      
      {/* Step 3: Pick-up Date */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">
          3. Data de Retirada
        </Label>
        <DateRangePicker 
          dateRange={dateRange}
          setDateRange={setDateRange}
          rentalPeriod={rentalPeriod}
          periodQuantity={periodQuantity}
          setPeriodQuantity={setPeriodQuantity}
        />
      </div>

      {/* Price and Total */}
      <div className="flex justify-between items-center pt-4 border-t">
        <div>
          <span className="text-sm text-muted-foreground">Valor por período</span>
          <div className="font-medium">{getPriceDisplay()}</div>
        </div>
        {dateRange && dateRange.from && dateRange.to && (
          <div className="text-right">
            <span className="text-sm text-muted-foreground">Valor Total</span>
            <div className="text-2xl font-bold">{formatCurrency(rentalTotal)}</div>
          </div>
        )}
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
