
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Box, ArrowUpDown } from "lucide-react";

// Define a type that includes the inventory-specific fields
export interface InventoryProduct {
  id: number | string; // Allow both number and string IDs
  name: string;
  category: string;
  available: boolean;
  status: string;
  stockQuantity: number;
  threshold: number;
  lastRestocked: string;
  brand: string;
  model: string;
  imageUrl: string;
  price: number;
  description: string;
  specs: {
    [key: string]: string;
  };
}

interface InventoryTableProps {
  products: InventoryProduct[];
}

export function InventoryTable({ products }: InventoryTableProps) {
  const getStockLevelProgressColor = (quantity: number, threshold: number) => {
    if (quantity === 0) return "bg-red-500";
    if (quantity <= threshold) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getStockStatusText = (quantity: number, threshold: number) => {
    if (quantity === 0) return "Esgotado";
    if (quantity <= threshold) return "Baixo";
    return "OK";
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[250px]">
            <div className="flex items-center space-x-1">
              <span>Produto</span>
              <ArrowUpDown className="h-3 w-3" />
            </div>
          </TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>
            <div className="flex items-center space-x-1">
              <span>Disponível</span>
              <ArrowUpDown className="h-3 w-3" />
            </div>
          </TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Estoque</TableHead>
          <TableHead>
            <div className="flex items-center space-x-1">
              <span>Última Reposição</span>
              <ArrowUpDown className="h-3 w-3" />
            </div>
          </TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">
              <div className="flex items-center space-x-2">
                <Box className="h-4 w-4 text-primary" />
                <span>{product.name}</span>
              </div>
            </TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>
              <Badge variant={product.available ? "default" : "secondary"}>
                {product.available ? "Sim" : "Não"}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge variant={product.status === "disponível" ? "outline" : "secondary"}>
                {product.status}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center space-x-2">
                <Progress 
                  value={(product.stockQuantity / 10) * 100} 
                  className="h-2 w-20"
                  indicatorClassName={`${getStockLevelProgressColor(product.stockQuantity, product.threshold)}`}
                />
                <span className="text-xs">
                  {product.stockQuantity} 
                  <span className="text-muted-foreground ml-1">
                    ({getStockStatusText(product.stockQuantity, product.threshold)})
                  </span>
                </span>
              </div>
            </TableCell>
            <TableCell>{product.lastRestocked}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">
                Editar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
