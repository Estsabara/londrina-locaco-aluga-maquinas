
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { productFormSchema, type ProductFormValues } from "./schemas/productFormSchema";
import { validateImage } from "./utils/imageHandler";
import { handleFormSubmit } from "./utils/formSubmitHandler";

export function useProductForm(initialData?: any, onSuccess?: () => void) {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(initialData?.imageurl || "");

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: initialData?.name || "",
      description: initialData?.description || "",
      category: initialData?.category || "",
      brand: initialData?.brand || "",
      model: initialData?.model || "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!validateImage(file)) {
        e.target.value = '';
        return;
      }
      
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const values = form.getValues();
      await handleFormSubmit(values, imageFile, initialData, onSuccess);
      
      if (!initialData) {
        form.reset();
        setImagePreview("");
        setImageFile(null);
      }
    } catch (error: any) {
      console.error("Form error:", error);
      toast.error(error.message || "Erro ao salvar produto");
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    loading,
    imagePreview,
    handleImageChange,
    onSubmit,
  };
}
