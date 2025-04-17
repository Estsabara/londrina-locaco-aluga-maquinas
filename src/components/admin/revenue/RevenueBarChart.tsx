
import { formatCurrency } from "@/lib/date-utils";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegendContent
} from "@/components/ui/chart";

interface DailyRevenueData {
  day: string;
  revenue: number;
  count: number;
}

interface RevenueBarChartProps {
  data: DailyRevenueData[];
}

export function RevenueBarChart({ data }: RevenueBarChartProps) {
  return (
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
            <BarChart data={data}>
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
  );
}
