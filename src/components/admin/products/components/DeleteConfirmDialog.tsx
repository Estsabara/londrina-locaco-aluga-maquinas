
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteConfirmDialogProps {
  product: any;
  onClose: () => void;
  onConfirm: (id: number) => void;
}

export function DeleteConfirmDialog({ product, onClose, onConfirm }: DeleteConfirmDialogProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Confirmar Exclusão</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <p>Tem certeza que deseja excluir o produto "{product?.name}"?</p>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button 
            variant="destructive" 
            onClick={() => product && onConfirm(product.id)}
          >
            Excluir
          </Button>
        </div>
      </div>
    </DialogContent>
  );
}
