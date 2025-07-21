
import React from "react";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Info, ShoppingCart } from "lucide-react";
import { DateRange, RentalPeriodType } from "@/types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface RentalOptionsProps {
  available: boolean;
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
  
  const getPeriodText = () => {
    switch (rentalPeriod) {
      case "daily":
        return "Diária";
      case "weekly":
        return "Semanal";
      case "monthly":
        return "Mensal";
      case "biweekly":
        return "Quinzenal";
      default:
        return "Diária";
    }
  };

  return <div className="space-y-6">
      <h2 className="font-semibold text-lg nordic-title text-nordic-deep">Configurar Convocação</h2>
      
      {/* Step 1: Quantity */}
      <div className="space-y-2 p-4 border rounded-md bg-nordic-ice border-nordic-gold/30">
        <Label htmlFor="quantity" className="text-sm font-medium flex items-center">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-nordic-deep text-nordic-gold text-xs mr-2">1</div>
          Quantidade
        </Label>
        <Input id="quantity" type="number" min={1} value={quantity} onChange={e => setQuantity(parseInt(e.target.value) || 1)} className="max-w-[200px]" />
      </div>
      
      {/* Step 2: Rental Period Type */}
      <div className="space-y-4 p-4 border rounded-md bg-nordic-ice border-nordic-gold/30">
        <Label className="text-sm font-medium flex items-center">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-nordic-deep text-nordic-gold text-xs mr-2">2</div>
          Período de Convocação
        </Label>
        <RadioGroup value={rentalPeriod} onValueChange={handlePeriodChange} className="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <div className="flex items-center space-x-2 border rounded-md p-2 border-nordic-gold/30 hover:bg-nordic-gold/10">
            <RadioGroupItem value="daily" id="daily" />
            <Label htmlFor="daily" className="cursor-pointer">Diário</Label>
          </div>
          
          <div className="flex items-center space-x-2 border rounded-md p-2 border-nordic-gold/30 hover:bg-nordic-gold/10">
            <RadioGroupItem value="weekly" id="weekly" />
            <Label htmlFor="weekly" className="cursor-pointer">Semanal</Label>
          </div>
          
          <div className="flex items-center space-x-2 border rounded-md p-2 border-nordic-gold/30 hover:bg-nordic-gold/10">
            <RadioGroupItem value="biweekly" id="biweekly" />
            <Label htmlFor="biweekly" className="cursor-pointer">Quinzenal</Label>
          </div>
          
          <div className="flex items-center space-x-2 border rounded-md p-2 border-nordic-gold/30 hover:bg-nordic-gold/10">
            <RadioGroupItem value="monthly" id="monthly" />
            <Label htmlFor="monthly" className="cursor-pointer">Mensal</Label>
          </div>
        </RadioGroup>
      </div>
      
      {/* Step 3: Pick-up Date */}
      <div className="space-y-2 p-4 border rounded-md bg-nordic-ice border-nordic-gold/30">
        <Label className="text-sm font-medium flex items-center">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-nordic-deep text-nordic-gold text-xs mr-2">3</div>
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

      {/* Period Summary */}
      <div className="flex justify-between items-center pt-4 border-t">
        <div>
          <span className="text-sm text-muted-foreground">Tipo de locação</span>
          <div className="font-medium">{getPeriodText()}</div>
        </div>
        <div className="text-right">
          <span className="text-sm text-muted-foreground">Período</span>
          <div className="font-medium">
            {rentalPeriod === "daily" ? (
              periodQuantity === 1 ? "1 dia" : `${periodQuantity} dias`
            ) : rentalPeriod === "weekly" ? (
              periodQuantity === 1 ? "1 semana" : `${periodQuantity} semanas`
            ) : rentalPeriod === "biweekly" ? (
              periodQuantity === 1 ? "1 quinzena" : `${periodQuantity} quinzenas`
            ) : (
              periodQuantity === 1 ? "1 mês" : `${periodQuantity} meses`
            )}
          </div>
        </div>
      </div>
      
      <Button onClick={onAddToCart} disabled={!available || !dateRange || !dateRange.from || !dateRange.to} className="w-full bg-nordic-deep hover:bg-nordic-pine" size="lg">
        <ShoppingCart className="mr-2 h-5 w-5" />
        Convocar para o Arsenal
      </Button>
      
      <div className="flex items-center p-3 bg-nordic-ice rounded-md text-sm border border-nordic-gold/30">
        <Info className="h-4 w-4 mr-2 flex-shrink-0" />
        <p className="nordic-text">A retirada e devolução do equipamento deve ser feita em nossa fortaleza. Solicite orçamento para expedição.</p>
      </div>
    </div>;
}
