
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ProductFormValues } from "../schemas/productFormSchema";
import { uploadImage } from "./imageHandler";

export const handleFormSubmit = async (
  values: ProductFormValues,
  imageFile: File | null,
  initialData: any,
  onSuccess?: () => void
) => {
  try {
    let imageUrl = initialData?.imageurl;

    // Upload image if a new one is selected
    if (imageFile) {
      try {
        imageUrl = await uploadImage(imageFile);
      } catch (error: any) {
        toast.error(`Erro no upload: ${error.message}`);
        throw error;
      }
    }

    // Prepare product data
    const productData = {
      name: values.name,
      description: values.description,
      price: Number(values.price),
      priceweekly: values.priceWeekly ? Number(values.priceWeekly) : null,
      pricemonthly: values.priceMonthly ? Number(values.priceMonthly) : null,
      category: values.category,
      brand: values.brand || null,
      model: values.model || null,
      imageurl: imageUrl,
      available: true,
      specs: {}
    };

    if (initialData?.id) {
      // Update existing product
      const { error } = await supabase
        .from('products')
        .update(productData)
        .eq('id', initialData.id);

      if (error) {
        console.error('Update error:', error);
        throw new Error(`Erro ao atualizar produto: ${error.message}`);
      }
      
      toast.success("Produto atualizado com sucesso!");
    } else {
      // Create new product
      const { error } = await supabase
        .from('products')
        .insert([productData]);

      if (error) {
        console.error('Insert error:', error);
        throw new Error(`Erro ao criar produto: ${error.message}`);
      }
      
      toast.success("Produto criado com sucesso!");
    }

    // Call onSuccess callback if provided
    if (onSuccess) {
      onSuccess();
    }
  } catch (error: any) {
    console.error('Form submission error:', error);
    throw error;
  }
};
