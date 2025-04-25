
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";

export function WelcomeCard() {
  return (
    <Card className="mb-6 bg-pink-50/50">
      <CardHeader className="flex flex-row items-center gap-4">
        <Package className="h-8 w-8 text-primary" />
        <div>
          <CardTitle>Bem-vindo ao Painel Administrativo</CardTitle>
          <CardDescription>
            Gerencie o catálogo de produtos em um só lugar.
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
