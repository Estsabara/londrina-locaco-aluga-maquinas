import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminLayout from "@/components/admin/AdminLayout";
import RentalsList from "@/components/admin/RentalsList";
import RevenueReport from "@/components/admin/RevenueReport";
import CustomerProductList from "@/components/admin/CustomerProductList";
import OverdueItems from "@/components/admin/OverdueItems";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { 
  BarChart3, 
  Calendar, 
  Users, 
  Clock, 
  ArrowDownUp, 
  Settings, 
  Box, 
  Warehouse 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import InventoryManagement from "@/components/admin/InventoryManagement";
import ProductAnalysis from "@/components/admin/ProductAnalysis";
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
                  Gerencie seus aluguéis, acompanhe receitas e mantenha o controle do estoque em um só lugar.
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Button variant="ghost" className="h-24 flex-col space-y-2" onClick={() => handleTabChange("rentals")}>
                    <BarChart3 className="h-8 w-8 text-primary" />
                    <span>Aluguéis</span>
                  </Button>
                  <Button variant="ghost" className="h-24 flex-col space-y-2" onClick={() => handleTabChange("revenue")}>
                    <Calendar className="h-8 w-8 text-green-500" />
                    <span>Receita</span>
                  </Button>
                  <Button variant="ghost" className="h-24 flex-col space-y-2" onClick={() => handleTabChange("customers")}>
                    <Users className="h-8 w-8 text-blue-500" />
                    <span>Clientes</span>
                  </Button>
                  <Button variant="ghost" className="h-24 flex-col space-y-2" onClick={() => handleTabChange("overdue")}>
                    <Clock className="h-8 w-8 text-red-500" />
                    <span>Atrasados</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-6">
            <TabsTrigger value="rentals" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span>Aluguéis</span>
            </TabsTrigger>
            <TabsTrigger value="revenue" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Receita</span>
            </TabsTrigger>
            <TabsTrigger value="customers" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Clientes</span>
            </TabsTrigger>
            <TabsTrigger value="overdue" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Atrasados</span>
            </TabsTrigger>
            <TabsTrigger value="inventory" className="flex items-center space-x-2">
              <Box className="h-4 w-4" />
              <span>Estoque</span>
            </TabsTrigger>
            <TabsTrigger value="analysis" className="flex items-center space-x-2">
              <Warehouse className="h-4 w-4" />
              <span>Produtos</span>
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center space-x-2">
              <Box className="h-4 w-4" />
              <span>Produtos</span>
            </TabsTrigger>
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
          
          <TabsContent value="overdue" className="bg-card shadow-lg rounded-lg p-6 border border-border/50">
            <OverdueItems />
          </TabsContent>

          <TabsContent value="inventory" className="bg-card shadow-lg rounded-lg p-6 border border-border/50">
            <InventoryManagement />
          </TabsContent>

          <TabsContent value="analysis" className="bg-card shadow-lg rounded-lg p-6 border border-border/50">
            <ProductAnalysis />
          </TabsContent>

          <TabsContent value="products" className="bg-card shadow-lg rounded-lg p-6 border border-border/50">
            <ProductList />
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
