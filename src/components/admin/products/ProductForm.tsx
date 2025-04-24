
import React from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { FormFields } from "./form/FormFields";
import { ImageUpload } from "./form/ImageUpload";
import { useProductForm } from "./form/useProductForm";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ProductFormProps {
  initialData?: any;
  onSuccess?: () => void;
}

export function ProductForm({ initialData, onSuccess }: ProductFormProps) {
  const { form, loading, imagePreview, imagePreview2, handleImageChange, onSubmit } = useProductForm(initialData, onSuccess);
  const [error, setError] = React.useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      await onSubmit(e);
    } catch (err: any) {
      setError(err.message || "Ocorreu um erro ao processar o formulário");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <FormFields form={form} />
        <ImageUpload 
          imagePreview={imagePreview}
          imagePreview2={imagePreview2}
          onImageChange={handleImageChange}
        />
        <div className="flex justify-end mt-8">
          <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {initialData ? "Atualizar Produto" : "Criar Produto"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
