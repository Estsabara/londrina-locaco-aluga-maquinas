
import React from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { FormFields } from "./form/FormFields";
import { ImageUpload } from "./form/ImageUpload";
import { useProductForm } from "./form/useProductForm";

interface ProductFormProps {
  initialData?: any;
  onSuccess?: () => void;
}

export function ProductForm({ initialData, onSuccess }: ProductFormProps) {
  const { form, loading, imagePreview, handleImageChange, onSubmit } = useProductForm(initialData, onSuccess);

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-6">
        <FormFields form={form} />
        <ImageUpload 
          imagePreview={imagePreview}
          onImageChange={handleImageChange}
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {initialData ? "Atualizar Produto" : "Criar Produto"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
