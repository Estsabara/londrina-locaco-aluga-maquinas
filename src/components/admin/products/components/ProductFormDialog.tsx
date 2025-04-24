
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProductForm } from "../ProductForm";
import { Loader2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProductFormDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  product: any | null;
  onSuccess: () => void;
  isNew?: boolean;
}

export function ProductFormDialog({ isOpen, onOpenChange, product, onSuccess, isNew = false }: ProductFormDialogProps) {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading state when dialog opens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Short timeout to simulate data loading
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{isNew ? "Novo Produto" : "Editar Produto"}</DialogTitle>
        </DialogHeader>
        
        {isLoading ? (
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <span className="ml-2">Carregando dados do produto...</span>
          </div>
        ) : (
          <ScrollArea className="h-[calc(90vh-120px)] pr-4">
            <div className="pb-6">
              <ProductForm 
                initialData={product} 
                onSuccess={onSuccess}
              />
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
