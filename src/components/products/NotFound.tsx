
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container py-10">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Produto não encontrado</h1>
          <p className="text-muted-foreground">
            O produto que você está procurando não existe ou foi removido.
          </p>
          <Button asChild>
            <Link to="/produtos">Voltar para Equipamentos</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
