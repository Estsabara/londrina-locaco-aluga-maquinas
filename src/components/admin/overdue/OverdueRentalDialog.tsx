
import { RentalContract } from "@/types";
import { Button } from "@/components/ui/button";
import { 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { formatShortDate, formatCurrency } from "@/lib/date-utils";
import { CheckCircle } from "lucide-react";
import { differenceInDays } from "date-fns";

interface OverdueRentalDialogProps {
  rental: RentalContract;
  onUpdateStatus: (id: string | number, status: string) => Promise<void>;
}

export const OverdueRentalDialog = ({ rental, onUpdateStatus }: OverdueRentalDialogProps) => {
  const calculateDaysOverdue = (endDate: Date) => {
    const today = new Date();
    return differenceInDays(today, endDate);
  };

  const calculateOverdueFee = () => {
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
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Detalhes do Aluguel Atrasado</DialogTitle>
        <DialogDescription>
          Informações para contato com o cliente.
        </DialogDescription>
      </DialogHeader>
      
      <div className="py-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-sm mb-1">Cliente</h4>
            <p>{rental.customers?.name}</p>
          </div>
          <div>
            <h4 className="font-medium text-sm mb-1">Telefone</h4>
            <p>{rental.customers?.phone || 'Não informado'}</p>
          </div>
          <div>
            <h4 className="font-medium text-sm mb-1">Email</h4>
            <p>{rental.customers?.email}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="font-medium text-sm mb-2">Itens Atrasados</h4>
          <div className="space-y-2">
            {(() => {
              const cartData = rental.cart_data as any[];
              if (!cartData?.length) return null;
              
              const overdueItems = cartData.filter(item => {
                const endDate = item.endDate ? new Date(item.endDate) : null;
                return endDate && endDate < new Date();
              });
              
              return overdueItems.map((item, idx) => {
                const endDate = item.endDate ? new Date(item.endDate) : null;
                return (
                  <div key={idx} className="border rounded p-2 bg-red-50">
                    <div className="font-medium">{item.product?.name}</div>
                    <div className="flex justify-between text-sm">
                      <span>Quantidade: {item.quantity}x</span>
                      <span>
                        Data de devolução: {endDate ? formatShortDate(endDate) : '-'}
                      </span>
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="font-medium text-sm mb-1">Multa Estimada</h4>
          <p className="font-bold text-red-600 text-xl">
            {formatCurrency(calculateOverdueFee())}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Cálculo baseado em 10% do valor diário por dia de atraso.
          </p>
        </div>
      </div>
      
      <DialogFooter>
        <Button
          onClick={() => rental.id && onUpdateStatus(rental.id, 'completed')}
          className="mr-2"
        >
          <CheckCircle className="h-4 w-4 mr-1" />
          Marcar como Devolvido
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
