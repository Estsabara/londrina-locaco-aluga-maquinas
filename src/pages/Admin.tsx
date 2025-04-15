
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminLayout from "@/components/admin/AdminLayout";
import RentalsList from "@/components/admin/RentalsList";
import RevenueReport from "@/components/admin/RevenueReport";
import CustomerProductList from "@/components/admin/CustomerProductList";
import OverdueItems from "@/components/admin/OverdueItems";
import { toast } from "sonner";

export default function Admin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (!data.session) {
        toast.error("Por favor, faça login para acessar o painel administrativo");
        navigate("/");
        return;
      }
      
      setLoading(false);
    };
    
    checkAuth();
  }, [navigate]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  return (
    <AdminLayout>
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Painel Administrativo</h1>
        </div>
        
        <Tabs defaultValue="rentals" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="rentals">Aluguéis</TabsTrigger>
            <TabsTrigger value="revenue">Receita</TabsTrigger>
            <TabsTrigger value="customers">Clientes/Produtos</TabsTrigger>
            <TabsTrigger value="overdue">Itens Atrasados</TabsTrigger>
          </TabsList>
          
          <TabsContent value="rentals" className="bg-card shadow rounded-lg p-6">
            <RentalsList />
          </TabsContent>
          
          <TabsContent value="revenue" className="bg-card shadow rounded-lg p-6">
            <RevenueReport />
          </TabsContent>
          
          <TabsContent value="customers" className="bg-card shadow rounded-lg p-6">
            <CustomerProductList />
          </TabsContent>
          
          <TabsContent value="overdue" className="bg-card shadow rounded-lg p-6">
            <OverdueItems />
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
