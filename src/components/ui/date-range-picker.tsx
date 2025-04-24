
import * as React from "react"
import { format, addDays, addWeeks, addMonths } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange, RentalPeriodType } from "@/types"
import { ptBR } from "date-fns/locale"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { disablePastDates } from "@/lib/date-utils"

interface DateRangePickerProps {
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  className?: string;
  rentalPeriod: RentalPeriodType;
  periodQuantity: number;
  setPeriodQuantity: (quantity: number) => void;
}

export function DateRangePicker({
  dateRange,
  setDateRange,
  className,
  rentalPeriod,
  periodQuantity,
  setPeriodQuantity,
}: DateRangePickerProps) {
  const handleSelect = (date: Date | undefined) => {
    if (!date || periodQuantity < 1) {
      setDateRange({ from: undefined, to: undefined });
      return;
    }

    let from = date;
    let to: Date;

    switch (rentalPeriod) {
      case "daily":
        to = addDays(date, periodQuantity); // Add the number of days directly
        break;
      case "weekly":
        to = addDays(addWeeks(date, periodQuantity), -1); // Last day of the last week
        break;
      case "monthly":
        to = addDays(addMonths(date, periodQuantity), -1); // Last day of the last month
        break;
      default:
        to = date;
    }

    setDateRange({ from, to });
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Math.max(1, parseInt(e.target.value) || 1);
    setPeriodQuantity(newQuantity);
    
    // If we already have a start date, update the end date based on the new quantity
    if (dateRange.from) {
      handleSelect(dateRange.from);
    }
  };

  const getPeriodLabel = () => {
    switch (rentalPeriod) {
      case "daily":
        return "dias";
      case "weekly":
        return "semanas";
      case "monthly":
        return "meses";
      default:
        return "período";
    }
  };

  return (
    <div className={cn("grid gap-4", className)}>
      <div className="flex items-end gap-4">
        <div className="flex-1">
          <Label>Quantos {getPeriodLabel()} você precisa?</Label>
          <Input
            type="number"
            min={1}
            value={periodQuantity}
            onChange={handleQuantityChange}
            className="mt-1.5"
          />
        </div>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "justify-start text-left font-normal",
                !dateRange?.from && "text-muted-foreground"
              )}
              disabled={periodQuantity < 1}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange?.from ? (
                <>
                  Retirada: {format(dateRange.from, "dd/MM/yyyy", { locale: ptBR })}
                  {dateRange.to && (
                    <span className="ml-2 text-muted-foreground">
                      (Devolução: {format(dateRange.to, "dd/MM/yyyy", { locale: ptBR })})
                    </span>
                  )}
                </>
              ) : (
                <span>Selecione a data de retirada</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 z-50 bg-white" align="start">
            <Calendar
              mode="single"
              selected={dateRange?.from}
              onSelect={handleSelect}
              initialFocus
              disabled={disablePastDates}
              locale={ptBR}
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
