
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProductForm } from "./ProductForm";
import { Edit, Plus, Trash2, AlertCircle, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function ProductList() {
  const queryClient = useQueryClient();
  const [editingProduct, setEditingProduct] = React.useState<any | null>(null);
  const [isNewProductDialogOpen, setIsNewProductDialogOpen] = React.useState(false);
  const [deleteConfirmProduct, setDeleteConfirmProduct] = React.useState<any | null>(null);

  const { data: products, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .order("name");
        
        if (error) {
          console.error("Error fetching products:", error);
          throw error;
        }
        return data || [];
      } catch (err: any) {
        console.error("Error in query function:", err);
        throw new Error(`Erro ao carregar produtos: ${err.message}`);
      }
    },
  });

  const handleDeleteProduct = async (id: number) => {
    setDeleteConfirmProduct(null);
    try {
      const { error } = await supabase
        .from("products")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Delete error:", error);
        throw error;
      }
      
      toast.success("Produto excluído com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(`Erro ao excluir produto: ${error.message}`);
    }
  };

  const handleConfirmDelete = (product: any) => {
    setDeleteConfirmProduct(product);
  };

  const handleEditSuccess = () => {
    setEditingProduct(null);
    queryClient.invalidateQueries({ queryKey: ["products"] });
  };

  const handleNewProductSuccess = () => {
    setIsNewProductDialogOpen(false);
    queryClient.invalidateQueries({ queryKey: ["products"] });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          <span>Carregando produtos...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center p-8 space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {error instanceof Error ? error.message : "Erro ao carregar produtos"}
          </AlertDescription>
        </Alert>
        <Button onClick={() => refetch()} variant="outline">
          <RefreshCw className="w-4 h-4 mr-2" />
          Tentar Novamente
        </Button>
      </div>
    );
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
                        onClick={() => handleConfirmDelete(product)}
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

      {/* Dialog de edição de produto */}
      <Dialog open={!!editingProduct} onOpenChange={(open) => !open && setEditingProduct(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Editar Produto</DialogTitle>
          </DialogHeader>
          <ProductForm 
            initialData={editingProduct} 
            onSuccess={handleEditSuccess}
          />
        </DialogContent>
      </Dialog>

      {/* Dialog de novo produto */}
      <Dialog 
        open={isNewProductDialogOpen} 
        onOpenChange={setIsNewProductDialogOpen}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Novo Produto</DialogTitle>
          </DialogHeader>
          <ProductForm onSuccess={handleNewProductSuccess} />
        </DialogContent>
      </Dialog>

      {/* Dialog de confirmação de exclusão */}
      <Dialog 
        open={!!deleteConfirmProduct} 
        onOpenChange={(open) => !open && setDeleteConfirmProduct(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar Exclusão</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>Tem certeza que deseja excluir o produto "{deleteConfirmProduct?.name}"?</p>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setDeleteConfirmProduct(null)}>Cancelar</Button>
              <Button 
                variant="destructive" 
                onClick={() => deleteConfirmProduct && handleDeleteProduct(deleteConfirmProduct.id)}
              >
                Excluir
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Helper component for loading animation
const Loader2 = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-loader-2 ${className || ''}`}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);
