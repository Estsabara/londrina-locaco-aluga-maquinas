
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface PricingFieldsProps {
  form: UseFormReturn<any>;
}

export function PricingFields({ form }: PricingFieldsProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Preços</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço Diário (R$)</FormLabel>
              <FormControl>
                <Input
                  placeholder="0.00"
                  type="number"
                  step="0.01"
                  min="0"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Valor para locação diária.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="priceWeekly"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço Semanal (R$)</FormLabel>
              <FormControl>
                <Input
                  placeholder="0.00"
                  type="number"
                  step="0.01"
                  min="0"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Valor para locação semanal (7 dias).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="priceBiweekly"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço Quinzenal (R$)</FormLabel>
              <FormControl>
                <Input
                  placeholder="0.00"
                  type="number"
                  step="0.01"
                  min="0"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Valor para locação quinzenal (15 dias).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="priceMonthly"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço Mensal (R$)</FormLabel>
              <FormControl>
                <Input
                  placeholder="0.00"
                  type="number"
                  step="0.01"
                  min="0"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Valor para locação mensal (30 dias).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}
