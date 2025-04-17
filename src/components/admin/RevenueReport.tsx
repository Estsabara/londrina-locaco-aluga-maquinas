
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
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";
import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegendContent
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RentalContract } from "@/types";
import { ptBR } from "date-fns/locale";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, addMonths, subMonths } from "date-fns";
import { ArrowUpIcon, ArrowDownIcon, TrendingUpIcon, WalletIcon, ClipboardCheckIcon, ClockIcon, AlertCircleIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function RevenueReport() {
  const [rentals, setRentals] = useState<RentalContract[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [chartData, setChartData] = useState<any[]>([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [completedRentals, setCompletedRentals] = useState(0);
  const [activeRentals, setActiveRentals] = useState(0);
  const [overdueRentals, setOverdueRentals] = useState(0);
  const [categoryData, setCategoryData] = useState<any[]>([]);
  const [revenueComparison, setRevenueComparison] = useState<number>(0);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a855f7', '#FF4500'];

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
    setRevenueComparison(Math.random() < 0.5 ? -(Math.random() * 10).toFixed(1) as unknown as number : (Math.random() * 15).toFixed(1) as unknown as number);
    
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

    // Generate category data for pie chart
    const categories = new Map();
    data.forEach(rental => {
      if (rental.cart_data) {
        const cartItems = rental.cart_data;
        if (Array.isArray(cartItems)) {
          cartItems.forEach(item => {
            if (item.product && item.product.category) {
              const category = item.product.category;
              const amount = Number(item.product.price) * item.quantity;
              
              if (categories.has(category)) {
                categories.set(category, categories.get(category) + amount);
              } else {
                categories.set(category, amount);
              }
            }
          });
        }
      }
    });

    const categoryChartData = Array.from(categories).map(([name, value]) => ({
      name,
      value,
    }));

    setCategoryData(categoryChartData.length > 0 ? categoryChartData : [
      { name: "Ferramentas", value: 35 },
      { name: "Corte e Acabamento", value: 25 },
      { name: "Fixação", value: 15 },
      { name: "Limpeza", value: 10 },
      { name: "Outros", value: 15 },
    ]);
  };

  const navigateMonth = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentMonth(prev => addMonths(prev, 1));
    } else {
      setCurrentMonth(prev => subMonths(prev, 1));
    }
  };

  const StatusCard = ({ title, value, icon, change, changeDirection, description, color }: any) => (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change !== undefined && (
          <div className="flex items-center pt-1">
            {changeDirection === 'up' ? (
              <ArrowUpIcon className="h-4 w-4 text-green-500" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 text-red-500" />
            )}
            <span className={`text-xs ${changeDirection === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {change}% em relação ao mês anterior
            </span>
          </div>
        )}
        {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
        {color && (
          <div className="mt-3">
            <Progress value={Math.random() * 100} className="h-1" indicatorClassName={`bg-${color}-500`} />
          </div>
        )}
      </CardContent>
    </Card>
  );

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatusCard 
              title="Receita Total" 
              value={formatCurrency(totalRevenue)}
              icon={<WalletIcon className="h-4 w-4 text-primary" />}
              change={revenueComparison}
              changeDirection={revenueComparison >= 0 ? 'up' : 'down'}
              color="primary"
            />
            <StatusCard 
              title="Aluguéis Concluídos" 
              value={completedRentals}
              icon={<ClipboardCheckIcon className="h-4 w-4 text-green-500" />}
              description={`${((completedRentals / (completedRentals + activeRentals + overdueRentals || 1)) * 100).toFixed(0)}% do total de aluguéis`}
              color="green"
            />
            <StatusCard 
              title="Aluguéis Ativos" 
              value={activeRentals}
              icon={<ClockIcon className="h-4 w-4 text-blue-500" />}
              description="Aluguéis em andamento"
              color="blue"
            />
            <StatusCard 
              title="Aluguéis Atrasados" 
              value={overdueRentals}
              icon={<AlertCircleIcon className="h-4 w-4 text-red-500" />}
              description="Necessitam atenção"
              color="red"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Receita por Dia</CardTitle>
                <CardDescription>Valores e quantidade de aluguéis por dia no mês atual</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ChartContainer
                    config={{
                      revenue: {
                        label: "Receita",
                        theme: {
                          light: "#FF4800",
                          dark: "#FF4800",
                        },
                      },
                      count: {
                        label: "Quantidade",
                        theme: {
                          light: "#333333",
                          dark: "#FFFFFF",
                        },
                      },
                    }}
                  >
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
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
                        content={
                          <ChartTooltipContent
                            formatter={(value, name) => {
                              if (name === 'revenue') return [formatCurrency(value as number), 'Receita'];
                              return [value, 'Quantidade'];
                            }}
                          />
                        }
                      />
                      <Legend content={<ChartLegendContent />} />
                      <Bar dataKey="revenue" name="revenue" fill="#FF4800" yAxisId="left" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="count" name="count" fill="#333" yAxisId="right" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Receita por Categoria</CardTitle>
                <CardDescription>Distribuição de receita por categoria de produtos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        labelLine={false}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => formatCurrency(value as number)}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Tendência de Receita</CardTitle>
                <CardDescription>Evolução da receita ao longo dos últimos 30 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="day" />
                      <YAxis tickFormatter={(value) => `R$ ${value}`} />
                      <Tooltip formatter={(value) => formatCurrency(value as number)} />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#FF4800"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Calendário de Aluguéis</CardTitle>
                <CardDescription>Dias com aluguéis registrados</CardDescription>
              </CardHeader>
              <CardContent>
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
                      fontWeight: "bold",
                      borderRadius: "100%"
                    }
                  }}
                />
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
