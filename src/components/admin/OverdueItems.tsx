import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { formatShortDate, formatCurrency } from "@/lib/date-utils";
import { toast } from "sonner";
import { AlertTriangle, CheckCircle, PhoneCall } from "lucide-react";
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
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { differenceInDays } from "date-fns";
import { RentalContract } from "@/types";

export default function OverdueItems() {
  const [rentals, setRentals] = useState<RentalContract[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRental, setSelectedRental] = useState<RentalContract | null>(null);

  const fetchRentals = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("rental_contracts")
        .select(`
          *,
          customers:customer_id (id, name, email, phone)
        `)
        .in("status", ["active", "overdue"])
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      // Filter to only get overdue rentals
      const today = new Date();
      const overdueRentals = (data || []).filter(rental => {
        const cartData = rental.cart_data as any[];
        if (!cartData?.length) return false;
        
        // Check if any item in the rental has an end date in the past
        return cartData.some(item => {
          const endDate = item.endDate ? new Date(item.endDate) : null;
          return endDate && endDate < today;
        });
      });
      
      // Update status to overdue in the database for overdue rentals
      for (const rental of overdueRentals) {
        if (rental.status !== 'overdue') {
          await supabase
            .from("rental_contracts")
            .update({ status: 'overdue' })
            .eq("id", rental.id);
            
          rental.status = 'overdue';
        }
      }
      
      setRentals(overdueRentals);
    } catch (error) {
      console.error("Error fetching overdue rentals:", error);
      toast.error("Erro ao carregar itens atrasados");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRentals();
    
    // Refresh every 5 minutes to keep the overdue status up to date
    const interval = setInterval(() => {
      fetchRentals();
    }, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const updateRentalStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("rental_contracts")
        .update({ status })
        .eq("id", id);
      
      if (error) throw error;
      
      fetchRentals();
      toast.success(`Status atualizado para ${status}`);
    } catch (error) {
      console.error("Error updating rental status:", error);
      toast.error("Erro ao atualizar status");
    }
  };

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
      
      // Calculate fee as 10% of the item's total value per day overdue
      const itemValue = item.product.price * item.quantity;
      const dailyFee = itemValue * 0.1;
      totalFee += dailyFee * daysOverdue;
    });
    
    return totalFee;
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
          <h2 className="text-2xl font-bold">Itens com Devolução Atrasada</h2>
        </div>
        <Button variant="outline" onClick={fetchRentals}>
          Atualizar
        </Button>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : rentals.length > 0 ? (
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
              
              // Find overdue items
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
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Detalhes do Aluguel Atrasado</DialogTitle>
                            <DialogDescription>
                              Informações para contato com o cliente.
                            </DialogDescription>
                          </DialogHeader>
                          
                          {selectedRental && (
                            <div className="py-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-sm mb-1">Cliente</h4>
                                  <p>{selectedRental.customers?.name}</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-sm mb-1">Telefone</h4>
                                  <p>{selectedRental.customers?.phone || 'Não informado'}</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-sm mb-1">Email</h4>
                                  <p>{selectedRental.customers?.email}</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-sm mb-1">Dias Atrasados</h4>
                                  <p className="font-bold text-red-600">
                                    {(() => {
                                      const cartData = selectedRental.cart_data as any[];
                                      if (!cartData?.length) return '-';
                                      
                                      const daysOverdue = cartData.map(item => {
                                        const endDate = item.endDate ? new Date(item.endDate) : null;
                                        return endDate ? calculateDaysOverdue(endDate) : 0;
                                      }).reduce((max, days) => Math.max(max, days), 0);
                                      
                                      return daysOverdue > 0 ? `${daysOverdue} dias` : '-';
                                    })()}
                                  </p>
                                </div>
                              </div>
                              
                              <div className="mt-4">
                                <h4 className="font-medium text-sm mb-2">Itens Atrasados</h4>
                                <div className="space-y-2">
                                  {(() => {
                                    const cartData = selectedRental.cart_data as any[];
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
                                  {formatCurrency(calculateOverdueFee(selectedRental))}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Cálculo baseado em 10% do valor diário por dia de atraso.
                                </p>
                              </div>
                            </div>
                          )}
                          
                          <DialogFooter>
                            <Button
                              onClick={() => updateRentalStatus(selectedRental?.id!, 'completed')}
                              className="mr-2"
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Marcar como Devolvido
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-green-600"
                        onClick={() => updateRentalStatus(rental.id!, 'completed')}
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
      ) : (
        <div className="text-center py-10 bg-green-50 rounded-lg">
          <CheckCircle className="h-12 w-12 mx-auto text-green-500 mb-2" />
          <p className="text-lg font-medium text-green-800">Não há itens com devolução atrasada.</p>
          <p className="text-muted-foreground">Todos os itens estão sendo devolvidos dentro do prazo.</p>
        </div>
      )}
    </div>
  );
}
