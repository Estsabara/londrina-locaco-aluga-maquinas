import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { CartSummary } from "@/components/cart/CartSummary";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { useCheckoutForm } from "@/hooks/useCheckoutForm";

export default function Checkout() {
  const { cartItems } = useCart();
  const { customer, handleChange, handleSubmit, isLoading } = useCheckoutForm();
  
  const isEmpty = cartItems.length === 0;
  
  if (isEmpty) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container py-10">
          <div className="text-center py-16 space-y-4">
            <h2 className="text-2xl font-semibold">Seu carrinho está vazio</h2>
            <p className="text-muted-foreground">
              Adicione equipamentos ao carrinho para continuar com a locação.
            </p>
            <Button asChild className="mt-4">
              <Link to="/produtos">
                Ver Equipamentos
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container py-10">
        <div className="mb-6">
          <Button asChild variant="ghost" className="pl-0">
            <Link to="/carrinho" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o Carrinho
            </Link>
          </Button>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 flex items-center">
            <ShoppingCart className="mr-3 h-6 w-6" />
            Finalizar Pedido
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg p-6 border">
                <h2 className="text-xl font-semibold mb-4">Seus Dados</h2>
                <CheckoutForm
                  onSubmit={handleSubmit}
                  onChange={handleChange}
                  customer={customer}
                  isLoading={isLoading}
                />
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
