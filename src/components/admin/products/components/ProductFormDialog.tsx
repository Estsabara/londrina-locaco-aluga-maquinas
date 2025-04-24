
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProductForm } from "../ProductForm";

interface ProductFormDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  product: any | null;
  onSuccess: () => void;
  isNew?: boolean;
}

export function ProductFormDialog({ isOpen, onOpenChange, product, onSuccess, isNew = false }: ProductFormDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{isNew ? "Novo Produto" : "Editar Produto"}</DialogTitle>
        </DialogHeader>
        <ProductForm 
          initialData={product} 
          onSuccess={onSuccess}
        />
      </DialogContent>
    </Dialog>
  );
}
