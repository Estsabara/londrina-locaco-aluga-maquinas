import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Shield } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        throw error;
      }
      
      toast.success("Login realizado com sucesso");
      setIsLoginOpen(false);
      navigate("/admin");
    } catch (error: any) {
      toast.error(error.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center text-primary font-bold text-xl">
          <ShoppingCart className="mr-2" />
          Londrina Locações
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Início
          </Link>
          <Link
            to="/produtos"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Produtos
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2"
            onClick={() => setIsLoginOpen(true)}
          >
            <Shield className="h-5 w-5" />
            <span className="hidden sm:inline">Administrativo</span>
          </Button>
          
          <Link to="/carrinho" className="relative hover:text-primary transition-colors">
            <ShoppingCart className="h-6 w-6" />
            {cartQuantity > 0 && (
              <span className="absolute top-[-6px] right-[-6px] bg-primary text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {cartQuantity}
              </span>
            )}
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4 z-50">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Início
              </Link>
              <Link
                to="/produtos"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Produtos
              </Link>
              <Button 
                variant="ghost" 
                className="flex items-center justify-start gap-2 px-0"
                onClick={() => {
                  setIsLoginOpen(true);
                  setIsMenuOpen(false);
                }}
              >
                <Shield className="h-5 w-5" />
                <span>Administrativo</span>
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Acesso Administrativo</DialogTitle>
            <DialogDescription className="text-center">
              Faça login para acessar o painel administrativo
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleLogin} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="seu@email.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Sua senha" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="pt-2">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Autenticando..." : "Entrar"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Navbar;
