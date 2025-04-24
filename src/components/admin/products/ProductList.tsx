
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/date-utils";
import { Badge } from "@/components/ui/badge";
import { Edit, Plus, Trash2 } from "lucide-react";
import { useProductListData } from "./hooks/useProductListData";
import { ProductLoader } from "./components/ProductLoader";
import { ProductError } from "./components/ProductError";
import { DeleteConfirmDialog } from "./components/DeleteConfirmDialog";
import { ProductFormDialog } from "./components/ProductFormDialog";
import { Dialog } from "@/components/ui/dialog";

export function ProductList() {
  const { products, isLoading, isError, error, refetch, handleDeleteProduct } = useProductListData();
  const [editingProduct, setEditingProduct] = React.useState<any | null>(null);
  const [isNewProductDialogOpen, setIsNewProductDialogOpen] = React.useState(false);
  const [deleteConfirmProduct, setDeleteConfirmProduct] = React.useState<any | null>(null);

  const handleEditSuccess = () => {
    setEditingProduct(null);
  };

  const handleNewProductSuccess = () => {
    setIsNewProductDialogOpen(false);
  };

  if (isLoading) {
    return <ProductLoader />;
  }

  if (isError) {
    return <ProductError error={error instanceof Error ? error : new Error('Unknown error')} onRetry={refetch} />;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Produtos</h2>
        <Button onClick={() => setIsNewProductDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Novo Produto
        </Button>
      </div>

      {products.length === 0 ? (
        <div className="text-center p-8 border rounded-md bg-muted/30">
          <p className="text-muted-foreground">Nenhum produto cadastrado</p>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell>
                    <Badge variant={product.available ? "default" : "destructive"}>
                      {product.available ? "Disponível" : "Indisponível"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingProduct(product)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setDeleteConfirmProduct(product)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <ProductFormDialog 
        isOpen={!!editingProduct}
        onOpenChange={(open) => !open && setEditingProduct(null)}
        product={editingProduct}
        onSuccess={handleEditSuccess}
      />

      <ProductFormDialog 
        isOpen={isNewProductDialogOpen}
        onOpenChange={setIsNewProductDialogOpen}
        product={null}
        onSuccess={handleNewProductSuccess}
        isNew
      />

      <Dialog 
        open={!!deleteConfirmProduct} 
        onOpenChange={(open) => !open && setDeleteConfirmProduct(null)}
      >
        <DeleteConfirmDialog
          product={deleteConfirmProduct}
          onClose={() => setDeleteConfirmProduct(null)}
          onConfirm={handleDeleteProduct}
        />
      </Dialog>
    </div>
  );
}
