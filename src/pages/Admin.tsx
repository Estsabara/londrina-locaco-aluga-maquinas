
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminLayout from "@/components/admin/AdminLayout";
import RentalsList from "@/components/admin/RentalsList";
import RevenueReport from "@/components/admin/RevenueReport";
import CustomerProductList from "@/components/admin/CustomerProductList";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowDownUp, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ProductList } from "@/components/admin/products/ProductList";

export default function Admin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("rentals");
  
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

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  
  return (
    <AdminLayout>
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Painel Administrativo</h1>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Filtrar por Data
            </Button>
            <Button variant="outline" size="sm">
              <ArrowDownUp className="mr-2 h-4 w-4" />
              Exportar Dados
            </Button>
            <Button variant="default" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Configurações
            </Button>
          </div>
        </div>
        
        <Card className="mb-6 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">Bem-vindo ao Painel Administrativo</h2>
                <p className="text-muted-foreground">
                  Gerencie seus aluguéis, acompanhe receitas e mantenha o controle em um só lugar.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="rentals">Aluguéis</TabsTrigger>
            <TabsTrigger value="revenue">Receita</TabsTrigger>
            <TabsTrigger value="customers">Clientes</TabsTrigger>
            <TabsTrigger value="products">Produtos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="rentals" className="bg-card shadow-lg rounded-lg p-6 border border-border/50">
            <RentalsList />
          </TabsContent>
          
          <TabsContent value="revenue" className="bg-card shadow-lg rounded-lg p-6 border border-border/50">
            <RevenueReport />
          </TabsContent>
          
          <TabsContent value="customers" className="bg-card shadow-lg rounded-lg p-6 border border-border/50">
            <CustomerProductList />
          </TabsContent>
          
          <TabsContent value="products" className="bg-card shadow-lg rounded-lg p-6 border border-border/50">
            <ProductList />
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
