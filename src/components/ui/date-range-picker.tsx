
import * as React from "react"
import { format, addDays, addWeeks, addMonths } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange as RDPDateRange } from "react-day-picker"
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
  dateRange: DateRange | undefined
  setDateRange: (range: DateRange | undefined) => void
  className?: string
  rentalPeriod?: RentalPeriodType
}

export function DateRangePicker({
  dateRange,
  setDateRange,
  className,
  rentalPeriod = "custom",
}: DateRangePickerProps) {
  const handleSelect = (range: RDPDateRange | undefined) => {
    if (!range) {
      setDateRange(undefined);
      return;
    }

    const { from } = range;
    if (!from) {
      setDateRange(undefined);
      return;
    }

    // Calculate "to" date based on rental period
    let to;
    switch (rentalPeriod) {
      case "daily":
        to = from; // Same day for daily rental
        break;
      case "weekly":
        to = addDays(from, 6); // 7 days (inclusive)
        break;
      case "monthly":
        to = addDays(addMonths(from, 1), -1); // Last day of the month period
        break;
      case "custom":
      default:
        to = range.to;
        break;
    }

    setDateRange({ from, to });
  };

  const shouldDisableCalendar = rentalPeriod !== "custom";
  
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !dateRange && "text-muted-foreground"
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
              <span>Selecione as datas de locação</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          {rentalPeriod === "custom" ? (
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange as RDPDateRange}
              onSelect={handleSelect}
              numberOfMonths={2}
              disabled={disablePastDates}
              locale={ptBR}
              className="pointer-events-auto"
            />
          ) : (
            <Calendar
              initialFocus
              mode="single"
              defaultMonth={dateRange?.from}
              selected={dateRange?.from}
              onSelect={(date) => date && handleSelect({ from: date, to: undefined })}
              numberOfMonths={1}
              disabled={disablePastDates}
              locale={ptBR}
              className="pointer-events-auto"
            />
          )}
        </PopoverContent>
      </Popover>
    </div>
  )
}
