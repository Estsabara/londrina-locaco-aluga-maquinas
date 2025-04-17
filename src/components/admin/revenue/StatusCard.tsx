
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface StatusCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: number;
  changeDirection?: 'up' | 'down';
  description?: string;
  color?: string;
}

export function StatusCard({ 
  title, 
  value, 
  icon, 
  change, 
  changeDirection, 
  description, 
  color 
}: StatusCardProps) {
  return (
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
            <Progress value={Math.random() * 100} className="h-1" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
