
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { formatCurrency } from "@/lib/date-utils";
import { supabase } from "@/integrations/supabase/client";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  CheckCircle,
  Clock,
  Search,
  Filter,
  XCircle
} from "lucide-react";
import { RentalContract } from "@/types";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RentalsList() {
  const [rentals, setRentals] = useState<RentalContract[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchRentals = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("rental_contracts")
        .select(`
          *,
          customers:customer_id (id, name, email, phone)
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      setRentals(data as RentalContract[] || []);
    } catch (error) {
      console.error("Error fetching rentals:", error);
      toast.error("Erro ao carregar aluguéis");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRentals();
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <span className="flex items-center text-green-600"><CheckCircle className="h-4 w-4 mr-1" /> Devolvido</span>;
      case 'overdue':
        return <span className="flex items-center text-red-600"><XCircle className="h-4 w-4 mr-1" /> Atrasado</span>;
      case 'active':
        return <span className="flex items-center text-blue-600"><Clock className="h-4 w-4 mr-1" /> Em andamento</span>;
      default:
        return <span className="text-muted-foreground">{status}</span>;
    }
  };

  const filteredRentals = rentals.filter(rental => {
    const customerName = rental.customers?.name?.toLowerCase() || '';
    const matchesSearch = customerName.includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || rental.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">Aluguéis Registrados</h2>
        
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por cliente..."
              className="pl-8 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative w-full sm:w-48">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filtrar status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os status</SelectItem>
                <SelectItem value="active">Em andamento</SelectItem>
                <SelectItem value="completed">Devolvido</SelectItem>
                <SelectItem value="overdue">Atrasado</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : filteredRentals.length > 0 ? (
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
              {filteredRentals.map((rental) => {
                // Parse the cart data to display products and dates
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
                    <TableCell>{getStatusBadge(rental.status)}</TableCell>
                    <TableCell className="text-right">
                      {rental.status !== 'completed' && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => rental.id && updateRentalStatus(rental.id, 'completed')}
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
                          onClick={() => rental.id && updateRentalStatus(rental.id, 'active')}
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
                          onClick={() => rental.id && updateRentalStatus(rental.id, 'overdue')}
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
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground">Nenhum aluguel encontrado.</p>
        </div>
      )}
    </div>
  );
}
