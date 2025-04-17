
import { useEffect, useState } from "react";
import { format, addMonths, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { WalletIcon, ClipboardCheckIcon, ClockIcon, AlertCircleIcon } from "lucide-react";
import { formatCurrency } from "@/lib/date-utils";
import { RentalContract } from "@/types";

// Import our new components
import { StatusCard } from "./revenue/StatusCard";
import { RevenueBarChart } from "./revenue/RevenueBarChart";
import { CategoryPieChart } from "./revenue/CategoryPieChart";
import { RevenueTrendChart } from "./revenue/RevenueTrendChart";
import { RentalCalendar } from "./revenue/RentalCalendar";
import { fetchRentalsForMonth, processRevenueData } from "./revenue/RevenueDataService";

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

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchRentalsForMonth(currentMonth);
      setRentals(data);
      
      const { stats, chartData, categoryData } = processRevenueData(data, currentMonth);
      
      setTotalRevenue(stats.totalRevenue);
      setCompletedRentals(stats.completedRentals);
      setActiveRentals(stats.activeRentals);
      setOverdueRentals(stats.overdueRentals);
      setRevenueComparison(stats.revenueComparison);
      setChartData(chartData);
      setCategoryData(categoryData);
    } catch (error) {
      console.error("Error loading data:", error);
      toast.error("Erro ao carregar dados de receita");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [currentMonth]);

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
            <RevenueBarChart data={chartData} />
            <CategoryPieChart data={categoryData} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <RevenueTrendChart data={chartData} />
            <RentalCalendar 
              rentals={rentals} 
              currentMonth={currentMonth} 
              onSelectDate={(date) => date && setCurrentMonth(date)} 
            />
          </div>
        </>
      )}
    </div>
  );
}
