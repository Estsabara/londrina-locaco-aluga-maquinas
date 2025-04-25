
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle } from "lucide-react";

export default function Success() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container py-16">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-bold">Pedido Enviado com Sucesso!</h1>
          
          <p className="text-muted-foreground text-lg">
            Seu pedido foi enviado para nossa equipe via WhatsApp. 
            Em breve entraremos em contato para confirmar os detalhes da locação.
          </p>
          
          <div className="pt-8">
            <Button asChild>
              <Link to="/produtos">
                Continuar Comprando
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
