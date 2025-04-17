
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ptBR } from "date-fns/locale";
import { RentalContract } from "@/types";

interface RentalCalendarProps {
  rentals: RentalContract[];
  currentMonth: Date;
  onSelectDate: (date: Date | undefined) => void;
}

export function RentalCalendar({ rentals, currentMonth, onSelectDate }: RentalCalendarProps) {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Calendário de Aluguéis</CardTitle>
        <CardDescription>Dias com aluguéis registrados</CardDescription>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={currentMonth}
          onSelect={onSelectDate}
          className="rounded-md border"
          locale={ptBR}
          modifiers={{
            hasRental: rentals.map(rental => new Date(rental.created_at)),
          }}
          modifiersStyles={{
            hasRental: { 
              backgroundColor: "rgba(255, 72, 0, 0.1)",
              fontWeight: "bold",
              borderRadius: "100%"
            }
          }}
        />
      </CardContent>
    </Card>
  );
}
