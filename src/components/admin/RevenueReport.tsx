
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { formatCurrency } from "@/lib/date-utils";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from "recharts";
import { ptBR } from "date-fns/locale";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, addMonths, subMonths } from "date-fns";
import { RentalContract } from "@/types";

export default function RevenueReport() {
  const [rentals, setRentals] = useState<RentalContract[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [chartData, setChartData] = useState<any[]>([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [completedRentals, setCompletedRentals] = useState(0);
  const [activeRentals, setActiveRentals] = useState(0);
  const [overdueRentals, setOverdueRentals] = useState(0);

  const fetchRentals = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("rental_contracts")
        .select("*")
        .gte("created_at", startOfMonth(currentMonth).toISOString())
        .lte("created_at", endOfMonth(currentMonth).toISOString());
      
      if (error) throw error;
      
      setRentals(data as RentalContract[] || []);
      processData(data as RentalContract[] || []);
    } catch (error) {
      console.error("Error fetching rentals:", error);
      toast.error("Erro ao carregar dados de receita");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRentals();
  }, [currentMonth]);

  const processData = (data: RentalContract[]) => {
    // Calculate statistics
    let total = 0;
    let completed = 0;
    let active = 0;
    let overdue = 0;
    
    data.forEach(rental => {
      total += Number(rental.total_amount);
      
      if (rental.status === 'completed') completed++;
      if (rental.status === 'active') active++;
      if (rental.status === 'overdue') overdue++;
    });
    
    setTotalRevenue(total);
    setCompletedRentals(completed);
    setActiveRentals(active);
    setOverdueRentals(overdue);
    
    // Generate chart data
    const daysInMonth = eachDayOfInterval({
      start: startOfMonth(currentMonth),
      end: endOfMonth(currentMonth),
    });
    
    const chartData = daysInMonth.map(day => {
      // Find rentals for this day
      const dayRentals = data.filter(rental => {
        const rentalDate = new Date(rental.created_at);
        return isSameDay(rentalDate, day);
      });
      
      // Calculate revenue
      let revenue = 0;
      dayRentals.forEach(rental => {
        revenue += Number(rental.total_amount);
      });
      
      return {
        day: format(day, 'dd/MM'),
        revenue,
        count: dayRentals.length,
      };
    });
    
    setChartData(chartData);
  };

  const navigateMonth = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentMonth(prev => addMonths(prev, 1));
    } else {
      setCurrentMonth(prev => subMonths(prev, 1));
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">Relatório de Receita</h2>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => navigateMonth('prev')}>
            Mês Anterior
          </Button>
          <span className="font-medium">
            {format(currentMonth, 'MMMM yyyy', { locale: ptBR })}
          </span>
          <Button variant="outline" onClick={() => navigateMonth('next')}>
            Próximo Mês
          </Button>
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="text-sm text-muted-foreground">Receita Total</div>
              <div className="text-2xl font-bold text-primary">{formatCurrency(totalRevenue)}</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <div className="text-sm text-muted-foreground">Aluguéis Concluídos</div>
              <div className="text-2xl font-bold text-green-600">{completedRentals}</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <div className="text-sm text-muted-foreground">Aluguéis Ativos</div>
              <div className="text-2xl font-bold text-blue-600">{activeRentals}</div>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <div className="text-sm text-muted-foreground">Aluguéis Atrasados</div>
              <div className="text-2xl font-bold text-red-600">{overdueRentals}</div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-medium mb-4">Receita por Dia</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis 
                      yAxisId="left"
                      tickFormatter={(value) => `R$ ${value}`}
                    />
                    <YAxis 
                      yAxisId="right"
                      orientation="right"
                      tickFormatter={(value) => `${value}`}
                    />
                    <Tooltip 
                      formatter={(value, name) => {
                        if (name === 'revenue') return [formatCurrency(value as number), 'Receita'];
                        return [value, 'Quantidade'];
                      }}
                    />
                    <Legend />
                    <Bar dataKey="revenue" name="Receita" fill="#ff4800" yAxisId="left" />
                    <Bar dataKey="count" name="Quantidade" fill="#333" yAxisId="right" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="w-full lg:w-auto">
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-medium mb-4">Calendário de Aluguéis</h3>
                <Calendar
                  mode="single"
                  selected={currentMonth}
                  onSelect={(date) => date && setCurrentMonth(date)}
                  className="rounded-md border"
                  locale={ptBR}
                  modifiers={{
                    hasRental: rentals.map(rental => new Date(rental.created_at)),
                  }}
                  modifiersStyles={{
                    hasRental: { 
                      backgroundColor: "rgba(255, 72, 0, 0.1)",
                      fontWeight: "bold" 
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
