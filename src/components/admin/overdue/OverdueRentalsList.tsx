
import { RentalContract } from "@/types";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { formatShortDate, formatCurrency } from "@/lib/date-utils";
import { CheckCircle, PhoneCall } from "lucide-react";
import { differenceInDays } from "date-fns";
import { OverdueRentalDialog } from "./OverdueRentalDialog";
import { useState } from "react";

interface OverdueRentalsListProps {
  rentals: RentalContract[];
  onUpdateStatus: (id: string | number, status: string) => Promise<void>;
}

export const OverdueRentalsList = ({ rentals, onUpdateStatus }: OverdueRentalsListProps) => {
  const [selectedRental, setSelectedRental] = useState<RentalContract | null>(null);

  const calculateDaysOverdue = (endDate: Date) => {
    const today = new Date();
    return differenceInDays(today, endDate);
  };

  const calculateOverdueFee = (rental: RentalContract) => {
    const cartData = rental.cart_data as any[];
    if (!cartData?.length) return 0;
    
    let totalFee = 0;
    
    cartData.forEach(item => {
      const endDate = item.endDate ? new Date(item.endDate) : null;
      if (!endDate) return;
      
      const daysOverdue = calculateDaysOverdue(endDate);
      if (daysOverdue <= 0) return;
      
      const itemValue = item.product.price * item.quantity;
      const dailyFee = itemValue * 0.1;
      totalFee += dailyFee * daysOverdue;
    });
    
    return totalFee;
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Cliente</TableHead>
          <TableHead>Contato</TableHead>
          <TableHead>Produto</TableHead>
          <TableHead>Data de Devolução</TableHead>
          <TableHead>Dias Atrasados</TableHead>
          <TableHead>Multa Estimada</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rentals.map((rental) => {
          const cartData = rental.cart_data as any[];
          if (!cartData?.length) return null;
          
          const today = new Date();
          const overdueItems = cartData.filter(item => {
            const endDate = item.endDate ? new Date(item.endDate) : null;
            return endDate && endDate < today;
          });
          
          if (!overdueItems.length) return null;
          
          const overdueFee = calculateOverdueFee(rental);
          
          return (
            <TableRow key={rental.id} className="bg-red-50">
              <TableCell>
                <div className="font-medium">{rental.customers?.name}</div>
              </TableCell>
              <TableCell>
                <div className="text-sm">{rental.customers?.phone || rental.customers?.email}</div>
              </TableCell>
              <TableCell>
                <div>
                  {overdueItems.map((item, idx) => (
                    <div key={idx} className="text-sm">
                      {item.product?.name} ({item.quantity}x)
                    </div>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                {overdueItems.map((item, idx) => {
                  const endDate = item.endDate ? new Date(item.endDate) : null;
                  return (
                    <div key={idx} className="text-sm">
                      {endDate ? formatShortDate(endDate) : '-'}
                    </div>
                  );
                })}
              </TableCell>
              <TableCell>
                {overdueItems.map((item, idx) => {
                  const endDate = item.endDate ? new Date(item.endDate) : null;
                  if (!endDate) return <div key={idx}>-</div>;
                  
                  const daysOverdue = calculateDaysOverdue(endDate);
                  return (
                    <div key={idx} className="font-bold text-red-600">
                      {daysOverdue > 0 ? `${daysOverdue} dias` : '-'}
                    </div>
                  );
                })}
              </TableCell>
              <TableCell>
                <div className="font-bold text-red-600">
                  {formatCurrency(overdueFee)}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-blue-600"
                        onClick={() => setSelectedRental(rental)}
                      >
                        <PhoneCall className="h-4 w-4 mr-1" />
                        Detalhes
                      </Button>
                    </DialogTrigger>
                    {selectedRental === rental && (
                      <OverdueRentalDialog 
                        rental={rental}
                        onUpdateStatus={onUpdateStatus}
                      />
                    )}
                  </Dialog>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-green-600"
                    onClick={() => rental.id && onUpdateStatus(rental.id, 'completed')}
                  >
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Marcar como Devolvido
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
