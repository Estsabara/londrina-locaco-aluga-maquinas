
import { ProductList } from "@/components/admin/products/ProductList";
import { Card } from "@/components/ui/card";

export function AdminTabs() {
  return (
    <Card className="bg-card shadow-lg rounded-lg p-6 border border-border/50">
      <ProductList />
    </Card>
  );
}
