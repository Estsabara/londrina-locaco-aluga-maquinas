
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface PricingFieldsProps {
  form: UseFormReturn<any>;
}

export function PricingFields({ form }: PricingFieldsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Preços por período</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="priceWeekly"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço Semanal (opcional)</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" placeholder="0.00" {...field} />
              </FormControl>
              <FormDescription>Por 7 dias</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="priceBiweekly"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço Quinzenal (opcional)</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" placeholder="0.00" {...field} />
              </FormControl>
              <FormDescription>Por 15 dias</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="priceMonthly"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço Mensal (opcional)</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" placeholder="0.00" {...field} />
              </FormControl>
              <FormDescription>Por 30 dias</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
