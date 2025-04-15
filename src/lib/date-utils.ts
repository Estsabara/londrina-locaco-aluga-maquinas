
import { addDays, format, isAfter, isBefore, isSameDay } from "date-fns";
import { ptBR } from "date-fns/locale";

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

export function calculateTotalPrice(pricePerDay: number, startDate: Date, endDate: Date): number {
  const days = calculateDaysBetween(startDate, endDate);
  return pricePerDay * days;
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
