
import * as z from "zod";

export const productFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  description: z.string().min(10, "Descrição deve ter pelo menos 10 caracteres"),
  category: z.string().min(1, "Categoria é obrigatória"),
  brand: z.string().optional(),
  model: z.string().optional(),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;
