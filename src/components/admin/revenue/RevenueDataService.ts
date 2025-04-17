
import { startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { RentalContract } from "@/types";

export interface RevenueStats {
  totalRevenue: number;
  completedRentals: number;
  activeRentals: number;
  overdueRentals: number;
  revenueComparison: number;
}

export interface DailyRevenueData {
  day: string;
  revenue: number;
  count: number;
}

export interface CategoryData {
  name: string;
  value: number;
}

export const fetchRentalsForMonth = async (currentMonth: Date): Promise<RentalContract[]> => {
  try {
    const { data, error } = await supabase
      .from("rental_contracts")
      .select("*")
      .gte("created_at", startOfMonth(currentMonth).toISOString())
      .lte("created_at", endOfMonth(currentMonth).toISOString());
    
    if (error) throw error;
    
    return data as RentalContract[] || [];
  } catch (error) {
    console.error("Error fetching rentals:", error);
    throw error;
  }
};

export const processRevenueData = (rentals: RentalContract[], currentMonth: Date): {
  stats: RevenueStats;
  chartData: DailyRevenueData[];
  categoryData: CategoryData[];
} => {
  // Calculate statistics
  let totalRevenue = 0;
  let completedRentals = 0;
  let activeRentals = 0;
  let overdueRentals = 0;
  
  rentals.forEach(rental => {
    totalRevenue += Number(rental.total_amount);
    
    if (rental.status === 'completed') completedRentals++;
    if (rental.status === 'active') activeRentals++;
    if (rental.status === 'overdue') overdueRentals++;
  });
  
  // Random comparison for demonstration
  const revenueComparison = Math.random() < 0.5 
    ? -(Math.random() * 10).toFixed(1) as unknown as number 
    : (Math.random() * 15).toFixed(1) as unknown as number;
  
  // Generate chart data
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });
  
  const chartData = daysInMonth.map(day => {
    // Find rentals for this day
    const dayRentals = rentals.filter(rental => {
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

  // Generate category data for pie chart
  const categories = new Map();
  rentals.forEach(rental => {
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

  const finalCategoryData = categoryChartData.length > 0 ? categoryChartData : [
    { name: "Ferramentas", value: 35 },
    { name: "Corte e Acabamento", value: 25 },
    { name: "Fixação", value: 15 },
    { name: "Limpeza", value: 10 },
    { name: "Outros", value: 15 },
  ];

  return {
    stats: {
      totalRevenue,
      completedRentals,
      activeRentals,
      overdueRentals,
      revenueComparison
    },
    chartData,
    categoryData: finalCategoryData
  };
};
