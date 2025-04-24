
import { Card, CardContent } from "@/components/ui/card";

export function WelcomeCard() {
  return (
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
  );
}
