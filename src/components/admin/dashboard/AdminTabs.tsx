
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RentalsList from "@/components/admin/RentalsList";
import RevenueReport from "@/components/admin/RevenueReport";
import CustomerProductList from "@/components/admin/CustomerProductList";
import { ProductList } from "@/components/admin/products/ProductList";

interface AdminTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

export function AdminTabs({ activeTab, onTabChange }: AdminTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
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
  );
}
