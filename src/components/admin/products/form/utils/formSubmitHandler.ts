
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ProductFormValues } from "../schemas/productFormSchema";
import { uploadImage } from "./imageHandler";

export const handleFormSubmit = async (
  values: ProductFormValues,
  imageFile: File | null,
  imageFile2: File | null,
  initialData: any,
  onSuccess?: () => void
) => {
  try {
    let imageUrl = initialData?.imageurl;
    let imageUrl2 = initialData?.imageurl2;

    // Upload images if new ones are selected
    if (imageFile) {
      try {
        imageUrl = await uploadImage(imageFile);
      } catch (error: any) {
        toast.error(`Erro no upload da imagem principal: ${error.message}`);
        throw error;
      }
    }

    if (imageFile2) {
      try {
        imageUrl2 = await uploadImage(imageFile2);
      } catch (error: any) {
        toast.error(`Erro no upload da imagem secundária: ${error.message}`);
        throw error;
      }
    }

    // Prepare product data with correct column names
    const productData = {
      name: values.name,
      description: values.description,
      category: values.category,
      imageurl: imageUrl,
      imageurl2: imageUrl2,
      available: true,
      specs: {},
      brand: values.brand || null,
      model: values.model || null,
      price: 0 // Default value for database compatibility
    };

    if (initialData?.id) {
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
      const { error } = await supabase
        .from('products')
        .insert([productData]);

      if (error) {
        console.error('Insert error:', error);
        throw new Error(`Erro ao criar produto: ${error.message}`);
      }
      
      toast.success("Produto criado com sucesso!");
    }

    if (onSuccess) {
      onSuccess();
    }
  } catch (error: any) {
    console.error('Form submission error:', error);
    throw error;
  }
};
