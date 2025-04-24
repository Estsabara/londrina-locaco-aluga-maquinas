
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  description: z.string().min(10, "Descrição deve ter pelo menos 10 caracteres"),
  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, "Preço deve ser maior que 0"),
  priceWeekly: z.string().optional(),
  priceMonthly: z.string().optional(),
  category: z.string().min(1, "Categoria é obrigatória"),
  brand: z.string().optional(),
  model: z.string().optional(),
});

export type ProductFormValues = z.infer<typeof formSchema>;

export function useProductForm(initialData?: any, onSuccess?: () => void) {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(initialData?.imageurl || "");

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || "",
      description: initialData?.description || "",
      price: initialData?.price?.toString() || "",
      priceWeekly: initialData?.priceweekly?.toString() || "",
      priceMonthly: initialData?.pricemonthly?.toString() || "",
      category: initialData?.category || "",
      brand: initialData?.brand || "",
      model: initialData?.model || "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Verificar tamanho do arquivo (5MB máximo)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("O tamanho máximo da imagem é 5MB");
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

  const createBucketIfNotExists = async () => {
    try {
      // Check if the bucket exists
      const { data: buckets, error: listError } = await supabase.storage.listBuckets();
      
      if (listError) {
        console.error('Error listing buckets:', listError);
        throw new Error(listError.message);
      }
      
      const bucketExists = buckets?.some(bucket => bucket.name === 'product-images');
      
      if (!bucketExists) {
        const { error: createError } = await supabase.storage.createBucket('product-images', {
          public: true,
          fileSizeLimit: 5242880 // 5MB
        });
        
        if (createError) {
          console.error('Error creating bucket:', createError);
          throw new Error(createError.message);
        }
      }
    } catch (error) {
      console.error('Error checking/creating bucket:', error);
      throw error;
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    try {
      // Garantir que o bucket existe
      await createBucketIfNotExists();
      
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      
      const { error: uploadError, data } = await supabase.storage
        .from('product-images')
        .upload(fileName, file);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw new Error('Erro ao fazer upload da imagem');
      }
      
      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(fileName);
        
      return publicUrl;
    } catch (error) {
      console.error('Image upload error:', error);
      throw error;
    }
  };

  const onSubmit = async (values: ProductFormValues) => {
    try {
      setLoading(true);
      let imageUrl = initialData?.imageurl;

      // Upload image if a new one is selected
      if (imageFile) {
        try {
          imageUrl = await uploadImage(imageFile);
        } catch (error: any) {
          toast.error(`Erro no upload: ${error.message}`);
          setLoading(false);
          return;
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
      
      // Reset form if it's a new product
      if (!initialData) {
        form.reset();
        setImagePreview("");
        setImageFile(null);
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
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
    onSubmit: form.handleSubmit(onSubmit),
  };
}
