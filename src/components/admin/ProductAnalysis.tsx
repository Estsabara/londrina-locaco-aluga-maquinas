
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { formatCurrency } from "@/lib/date-utils";
import { plainasProducts } from "@/data/products/corte-acabamento/plainas";
import { politrizesProducts } from "@/data/products/corte-acabamento/politrizes";
import { TrendingUp, BarChart3, PieChart as PieChartIcon, Calendar, Download } from "lucide-react";

export default function ProductAnalysis() {
  const [periodFilter, setPeriodFilter] = useState("month");
  const [chartType, setChartType] = useState("revenue");
  
  // Combine all products
  const allProducts = [...plainasProducts, ...politrizesProducts];
  
  // Mock data for product revenue
  const productRevenueData = allProducts.slice(0, 6).map(product => ({
    name: product.name,
    value: Math.floor(Math.random() * 5000) + 1000,
    rentals: Math.floor(Math.random() * 30) + 5
  }));
  
  // Mock data for category revenue
  const categoryRevenueData = [
    { name: "Corte e Acabamento", value: 10500, rentals: 35 },
    { name: "Perfuração", value: 8200, rentals: 28 },
    { name: "Fixação", value: 5400, rentals: 18 },
    { name: "Limpeza", value: 4100, rentals: 14 },
    { name: "Energia", value: 6800, rentals: 23 }
  ];
  
  // Monthly trend data
  const monthlyTrendData = [
    { name: "Jan", revenue: 12000, rentals: 42 },
    { name: "Fev", revenue: 15000, rentals: 51 },
    { name: "Mar", revenue: 13500, rentals: 46 },
    { name: "Abr", revenue: 18000, rentals: 62 },
    { name: "Mai", revenue: 16800, rentals: 58 },
    { name: "Jun", revenue: 20000, rentals: 68 },
    { name: "Jul", revenue: 22500, rentals: 76 },
    { name: "Ago", revenue: 21000, rentals: 72 },
    { name: "Set", revenue: 23000, rentals: 78 },
    { name: "Out", revenue: 19500, rentals: 66 },
    { name: "Nov", revenue: 17800, rentals: 61 },
    { name: "Dez", revenue: 25000, rentals: 85 }
  ];
  
  // Customer satisfaction data (mock)
  const satisfactionData = [
    { name: "Muito Satisfeito", value: 65 },
    { name: "Satisfeito", value: 25 },
    { name: "Neutro", value: 7 },
    { name: "Insatisfeito", value: 3 }
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a855f7'];
  
  // Calculate total revenue and rentals
  const totalRevenue = productRevenueData.reduce((sum, item) => sum + item.value, 0);
  const totalRentals = productRevenueData.reduce((sum, item) => sum + item.rentals, 0);
  
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">Análise de Produtos</h2>
        
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Select defaultValue={periodFilter} onValueChange={setPeriodFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione o período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Última Semana</SelectItem>
              <SelectItem value="month">Último Mês</SelectItem>
              <SelectItem value="quarter">Último Trimestre</SelectItem>
              <SelectItem value="year">Último Ano</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Período Personalizado
          </Button>
          
          <Button variant="default">
            <Download className="mr-2 h-4 w-4" />
            Exportar Relatório
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Receita Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalRevenue)}</div>
            <div className="flex items-center mt-1 text-xs text-green-500">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>+15.2% em relação ao período anterior</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Aluguéis Totais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalRentals}</div>
            <div className="flex items-center mt-1 text-xs text-green-500">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>+8.7% em relação ao período anterior</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Ticket Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalRevenue / totalRentals)}</div>
            <div className="flex items-center mt-1 text-xs text-green-500">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>+5.9% em relação ao período anterior</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Satisfação do Cliente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {`${Math.round((satisfactionData[0].value + satisfactionData[1].value))}%`}
            </div>
            <div className="flex items-center mt-1 text-xs text-green-500">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>+2.3% em relação ao período anterior</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Produtos Mais Alugados</CardTitle>
                <CardDescription>Top produtos por receita gerada</CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant={chartType === "revenue" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setChartType("revenue")}
                >
                  <BarChart3 className="h-4 w-4 mr-1" />
                  Receita
                </Button>
                <Button 
                  variant={chartType === "rentals" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setChartType("rentals")}
                >
                  <BarChart3 className="h-4 w-4 mr-1" />
                  Quantidade
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  value: {
                    label: chartType === "revenue" ? "Receita" : "Aluguéis",
                    theme: {
                      light: "#FF4800",
                      dark: "#FF4800",
                    },
                  },
                }}
              >
                <BarChart
                  data={productRevenueData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" />
                  <YAxis 
                    type="category" 
                    dataKey="name" 
                    width={100}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip
                    content={
                      <ChartTooltipContent
                        formatter={(value) => 
                          chartType === "revenue" 
                            ? formatCurrency(value as number) 
                            : `${value} aluguéis`}
                      />
                    }
                  />
                  <Bar 
                    dataKey={chartType === "revenue" ? "value" : "rentals"} 
                    name="value"
                    fill="#FF4800" 
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Desempenho por Categoria</CardTitle>
                <CardDescription>Receita gerada por categoria de produto</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <PieChartIcon className="h-4 w-4 mr-1" />
                Trocar Visualização
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryRevenueData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryRevenueData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(value as number)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Tendência Mensal</CardTitle>
            <CardDescription>Evolução de receita e aluguéis ao longo do tempo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTrendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis 
                    yAxisId="left" 
                    orientation="left"
                    tickFormatter={(value) => `R$ ${value/1000}k`}
                  />
                  <YAxis 
                    yAxisId="right" 
                    orientation="right"
                  />
                  <Tooltip formatter={(value, name) => {
                    if (name === 'revenue') return [formatCurrency(value as number), 'Receita'];
                    return [value, 'Aluguéis'];
                  }} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#FF4800" 
                    yAxisId="left"
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rentals" 
                    stroke="#8884d8" 
                    yAxisId="right"
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Satisfação do Cliente</CardTitle>
            <CardDescription>Nível de satisfação com os produtos alugados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={satisfactionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {satisfactionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
