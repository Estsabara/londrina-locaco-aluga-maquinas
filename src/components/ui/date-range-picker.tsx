
import * as React from "react"
import { format, addDays, addMonths } from "date-fns"
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
import { disablePastDates } from "@/lib/date-utils"

interface DateRangePickerProps {
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  className?: string;
  rentalPeriod: RentalPeriodType;
}

export function DateRangePicker({
  dateRange,
  setDateRange,
  className,
  rentalPeriod,
}: DateRangePickerProps) {
  const handleSelect = (date: Date | undefined) => {
    if (!date) {
      setDateRange({ from: undefined, to: undefined });
      return;
    }

    let from = date;
    let to: Date;

    switch (rentalPeriod) {
      case "daily":
        to = date;
        break;
      case "weekly":
        to = addDays(date, 6); // 7 days including start date
        break;
      case "monthly":
        to = addDays(addMonths(date, 1), -1); // Last day of the month
        break;
      case "custom":
      default:
        to = date; // Default for custom
        break;
    }

    setDateRange({ from, to });
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !dateRange?.from && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "dd/MM/yyyy", { locale: ptBR })} até{" "}
                  {format(dateRange.to, "dd/MM/yyyy", { locale: ptBR })}
                </>
              ) : (
                format(dateRange.from, "dd/MM/yyyy", { locale: ptBR })
              )
            ) : (
              <span>Selecione a data inicial</span>
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
  );
}
