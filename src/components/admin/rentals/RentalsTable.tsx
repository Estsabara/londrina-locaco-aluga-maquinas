
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, XCircle } from "lucide-react";
import { RentalContract } from "@/types";
import { formatCurrency } from "@/lib/date-utils";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { RentalStatusBadge } from "./RentalStatusBadge";

interface RentalsTableProps {
  rentals: RentalContract[];
  onUpdateStatus: (id: string, status: string) => void;
}

export const RentalsTable = ({ rentals, onUpdateStatus }: RentalsTableProps) => {
  return (
    <div className="overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cliente</TableHead>
            <TableHead>Data de Início</TableHead>
            <TableHead>Data de Término</TableHead>
            <TableHead>Produtos</TableHead>
            <TableHead>Valor Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rentals.map((rental) => {
            const cartData = rental.cart_data as any[];
            const firstItem = cartData?.[0] || {};
            const startDate = firstItem.startDate ? new Date(firstItem.startDate) : null;
            const endDate = firstItem.endDate ? new Date(firstItem.endDate) : null;
            
            return (
              <TableRow key={rental.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{rental.customers?.name}</div>
                    <div className="text-sm text-muted-foreground">{rental.customers?.email}</div>
                  </div>
                </TableCell>
                <TableCell>
                  {startDate ? format(startDate, 'dd/MM/yyyy', { locale: ptBR }) : '-'}
                </TableCell>
                <TableCell>
                  {endDate ? format(endDate, 'dd/MM/yyyy', { locale: ptBR }) : '-'}
                </TableCell>
                <TableCell>
                  {cartData?.map((item, idx) => (
                    <div key={idx} className="text-sm">
                      {item.product?.name} ({item.quantity}x)
                    </div>
                  ))}
                </TableCell>
                <TableCell>{formatCurrency(rental.total_amount)}</TableCell>
                <TableCell><RentalStatusBadge status={rental.status} /></TableCell>
                <TableCell className="text-right">
                  {rental.status !== 'completed' && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => rental.id && onUpdateStatus(rental.id.toString(), 'completed')}
                    >
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Marcar como Devolvido
                    </Button>
                  )}
                  {rental.status !== 'active' && rental.status !== 'overdue' && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="ml-2"
                      onClick={() => rental.id && onUpdateStatus(rental.id.toString(), 'active')}
                    >
                      <Clock className="h-3 w-3 mr-1" />
                      Em andamento
                    </Button>
                  )}
                  {rental.status !== 'overdue' && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="ml-2 text-red-600 hover:text-red-600"
                      onClick={() => rental.id && onUpdateStatus(rental.id.toString(), 'overdue')}
                    >
                      <XCircle className="h-3 w-3 mr-1" />
                      Marcar como Atrasado
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
