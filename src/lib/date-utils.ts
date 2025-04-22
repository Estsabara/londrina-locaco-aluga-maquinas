
import { addDays, format, isAfter, isBefore, isSameDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import { RentalPeriodType } from "@/types";

export function formatDate(date: Date): string {
  return format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
}

export function formatShortDate(date: Date): string {
  return format(date, "dd/MM/yyyy", { locale: ptBR });
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function calculateDaysBetween(startDate: Date, endDate: Date): number {
  if (isSameDay(startDate, endDate)) return 1;
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  // Reset hours to avoid issues with daylight saving
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays + 1; // Include both start and end days
}

export function calculateTotalPrice(
  price: number, 
  startDate: Date, 
  endDate: Date, 
  rentalPeriod: RentalPeriodType = "daily"
): number {
  switch (rentalPeriod) {
    case "daily":
      const days = calculateDaysBetween(startDate, endDate);
      return price * days;
    case "weekly":
      const weeks = Math.ceil(calculateDaysBetween(startDate, endDate) / 7);
      return price * weeks;
    case "monthly":
      // Approximate months calculation
      const days30 = calculateDaysBetween(startDate, endDate);
      const months = Math.ceil(days30 / 30);
      return price * months;
    case "custom":
      return calculateDaysBetween(startDate, endDate) * (price / 7); // Divide weekly by 7 for daily rate
    default:
      return calculateDaysBetween(startDate, endDate) * price;
  }
}

export function disablePastDates(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return isBefore(date, today);
}

export function getDateRange(days: number): { from: Date; to: Date } {
  const today = new Date();
  const future = addDays(today, days);
  return { from: today, to: future };
}
