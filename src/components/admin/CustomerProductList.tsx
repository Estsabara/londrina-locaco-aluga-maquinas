
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Search, User, Package } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { formatShortDate } from "@/lib/date-utils";
import { RentalContract, Customer } from "@/types";
import { Badge } from "@/components/ui/badge";

export default function CustomerProductList() {
  const [rentals, setRentals] = useState<RentalContract[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchRentals = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("rental_contracts")
        .select(`
          *,
          customers:customer_id (id, name, email, phone, document_number)
        `)
        .eq("status", "active")
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      setRentals(data || []);
    } catch (error) {
      console.error("Error fetching rentals:", error);
      toast.error("Erro ao carregar dados de cliente/produto");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRentals();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return "bg-green-100 text-green-800";
      case 'overdue':
        return "bg-red-100 text-red-800";
      case 'active':
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredRentals = rentals.filter(rental => {
    const customerName = rental.customers?.name?.toLowerCase() || '';
    const customerEmail = rental.customers?.email?.toLowerCase() || '';
    const customerDocument = rental.customers?.document_number?.toLowerCase() || '';
    
    let productsMatch = false;
    const cartData = rental.cart_data as any[];
    
    cartData?.forEach((item) => {
      const productName = item.product?.name?.toLowerCase() || '';
      if (productName.includes(searchTerm.toLowerCase())) {
        productsMatch = true;
      }
    });
    
    return (
      customerName.includes(searchTerm.toLowerCase()) || 
      customerEmail.includes(searchTerm.toLowerCase()) ||
      customerDocument.includes(searchTerm.toLowerCase()) ||
      productsMatch
    );
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">Clientes e Produtos</h2>
        
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar por cliente ou produto..."
            className="pl-8 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : filteredRentals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRentals.map(rental => {
            const cartData = rental.cart_data as any[];
            const firstItem = cartData?.[0] || {};
            const startDate = firstItem.startDate ? new Date(firstItem.startDate) : null;
            const endDate = firstItem.endDate ? new Date(firstItem.endDate) : null;
            
            return (
              <Card key={rental.id} className="overflow-hidden">
                <CardHeader className="border-b bg-muted/40 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {rental.customers?.name}
                      </CardTitle>
                      <CardDescription>{rental.customers?.email}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(rental.status)}>
                      {rental.status === 'active' ? 'Em andamento' : 
                       rental.status === 'completed' ? 'Devolvido' : 
                       rental.status === 'overdue' ? 'Atrasado' : rental.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <h4 className="font-medium text-sm mb-2 flex items-center">
                    <Package className="h-4 w-4 mr-1" />
                    Produtos alugados
                  </h4>
                  
                  <div className="space-y-2">
                    {cartData?.map((item, idx) => (
                      <div key={idx} className="border rounded-md p-2 bg-muted/20">
                        <div className="font-medium">{item.product?.name}</div>
                        <div className="text-sm text-muted-foreground flex justify-between">
                          <span>Quantidade: {item.quantity}x</span>
                          <span>Marca: {item.product?.brand}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t p-4 flex justify-between">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Período:</span>{' '}
                    {startDate && endDate ? (
                      <>
                        {formatShortDate(startDate)} - {formatShortDate(endDate)}
                      </>
                    ) : (
                      <span>Não definido</span>
                    )}
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Doc:</span>{' '}
                    {rental.customers?.document_number || 'N/A'}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground">Nenhum aluguel ativo encontrado.</p>
        </div>
      )}
    </div>
  );
}
