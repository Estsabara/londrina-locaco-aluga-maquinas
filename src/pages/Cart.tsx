
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/components/cart/CartItem";
import { formatCurrency } from "@/lib/date-utils";
import { ShoppingCart, ArrowRight, ArrowLeft } from "lucide-react";

export default function Cart() {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { cartItems, getCartTotal, clearCart } = useCart();
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate a checkout process
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      
      // Redirect to success page or show success message
      alert("Locação efetuada com sucesso! O pagamento será feito na retirada dos equipamentos.");
    }, 1500);
  };
  
  const cartTotal = getCartTotal();
  const isEmpty = cartItems.length === 0;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container py-10">
        <div className="mb-6">
          <Button asChild variant="ghost" className="pl-0">
            <Link to="/produtos" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continuar Comprando
            </Link>
          </Button>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 flex items-center">
            <ShoppingCart className="mr-3 h-6 w-6" />
            Carrinho de Locação
          </h1>
          
          {isEmpty ? (
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
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {cartItems.map((item) => (
                  <CartItem key={`${item.product.id}-${item.startDate.toISOString()}`} item={item} />
                ))}
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-secondary rounded-lg p-6 sticky top-20">
                  <h2 className="text-xl font-semibold mb-4">Resumo da Locação</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>{formatCurrency(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxa de serviço</span>
                      <span>{formatCurrency(0)}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>{formatCurrency(cartTotal)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                    >
                      {isCheckingOut ? "Processando..." : "Finalizar Locação"}
                      {!isCheckingOut && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                    
                    <div className="text-sm text-muted-foreground">
                      <p>Pagamento será feito na retirada do equipamento.</p>
                      <p>Documentação e caução serão solicitados.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
