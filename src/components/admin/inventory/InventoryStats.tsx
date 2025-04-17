
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Box } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface InventoryStatsProps {
  productsCount: number;
  availableCount: number;
  rentedCount: number;
  lowStockCount: number;
  stockStatusData: Array<{ name: string; value: number }>;
  stockLevelsData: Array<{ name: string; value: number }>;
}

export function InventoryStats({
  productsCount,
  availableCount,
  rentedCount,
  lowStockCount,
  stockStatusData,
  stockLevelsData
}: InventoryStatsProps) {
  const COLORS = ['#0088FE', '#FF8042', '#FFBB28', '#00C49F'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Resumo do Estoque</CardTitle>
          <CardDescription>Visão geral da situação atual do estoque</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-medium">Total de Itens</span>
              <span className="text-2xl font-bold">{productsCount}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-medium">Itens Disponíveis</span>
              <span className="text-2xl font-bold">{availableCount}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-medium">Itens Alugados</span>
              <span className="text-2xl font-bold">{rentedCount}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-medium">Estoque Baixo</span>
              <span className="text-2xl font-bold text-yellow-500">{lowStockCount}</span>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4">
            <RefreshCw className="mr-2 h-4 w-4" />
            Atualizar Estoque
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Status do Estoque</CardTitle>
          <CardDescription>Disponibilidade dos itens no estoque</CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div className="h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stockStatusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {stockStatusData.map((entry, index) => (
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

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Níveis de Estoque</CardTitle>
          <CardDescription>Status dos níveis de estoque</CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div className="h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stockLevelsData}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  <Cell fill="#00C49F" />
                  <Cell fill="#FFBB28" />
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
