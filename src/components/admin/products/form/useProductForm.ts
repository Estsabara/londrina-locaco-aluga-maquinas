
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
  const [imageFile2, setImageFile2] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(initialData?.imageurl || "");
  const [imagePreview2, setImagePreview2] = useState<string>(initialData?.imageurl2 || "");

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: initialData?.name || "",
      description: initialData?.description || "",
      category: initialData?.category || "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, imageNumber: 1 | 2) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!validateImage(file)) {
        e.target.value = '';
        return;
      }
      
      if (imageNumber === 1) {
        setImageFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setImageFile2(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview2(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const values = form.getValues();
      await handleFormSubmit(values, imageFile, imageFile2, initialData, onSuccess);
      
      if (!initialData) {
        form.reset();
        setImagePreview("");
        setImagePreview2("");
        setImageFile(null);
        setImageFile2(null);
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
    imagePreview2,
    handleImageChange,
    onSubmit,
  };
}
