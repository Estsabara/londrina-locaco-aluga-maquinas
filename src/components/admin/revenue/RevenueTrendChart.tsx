
import { formatCurrency } from "@/lib/date-utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface DailyRevenueData {
  day: string;
  revenue: number;
  count: number;
}

interface RevenueTrendChartProps {
  data: DailyRevenueData[];
}

export function RevenueTrendChart({ data }: RevenueTrendChartProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Tendência de Receita</CardTitle>
        <CardDescription>Evolução da receita ao longo dos últimos 30 dias</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
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
  );
}
