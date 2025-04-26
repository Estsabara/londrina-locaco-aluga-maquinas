
import * as z from "zod";

export const productFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  description: z.string().min(10, "Descrição deve ter pelo menos 10 caracteres"),
  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, "Preço deve ser maior que 0"),
  priceWeekly: z.string().optional(),
  priceBiweekly: z.string().optional(),
  priceMonthly: z.string().optional(),
  category: z.string().min(1, "Categoria é obrigatória"),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;
