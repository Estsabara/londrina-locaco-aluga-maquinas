
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { Input } from "@/components/ui/input";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const isMobile = useIsMobile();
  
  const cartItemCount = getCartItemCount();
  
  return (
    <>
      {/* Top bar com links secundários */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container flex justify-end gap-6">
          <Link to="/nossas-lojas" className="hover:underline">Nossas Lojas</Link>
          <Link to="/seja-franqueado" className="hover:underline">Seja um franqueado</Link>
          <Link to="/ouvidoria" className="hover:underline">Ouvidoria</Link>
        </div>
      </div>
      
      {/* Navbar principal */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/fd844232-ed4e-417c-9466-26ce847d8051.png" 
              alt="Londrina Locações" 
              className="h-12 w-auto object-contain"
            />
          </Link>
          
          {/* Campo de busca */}
          <div className="hidden md:flex flex-1 mx-12 relative">
            <Input
              type="text"
              placeholder="Do que você precisa?"
              className="w-full pl-10 pr-4 py-2 rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <UserCircle2 className="h-5 w-5" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Olá!</span>
                <Link to="/login" className="text-xs hover:underline">Entrar ou Cadastrar-se</Link>
              </div>
            </div>
            
            <Link to="/carrinho">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 px-2 py-1 h-5 min-w-5 flex items-center justify-center">
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobile && mobileMenuOpen && (
          <div className="md:hidden px-4 py-2 space-y-2 border-t bg-background">
            <div className="relative my-2">
              <Input
                type="text"
                placeholder="Do que você precisa?"
                className="w-full pl-10 pr-4 py-2 rounded-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            <Link 
              to="/" 
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/produtos" 
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Equipamentos
            </Link>
            <Link 
              to="/sobre" 
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link 
              to="/contato" 
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>
            <Link 
              to="/login" 
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Entrar ou Cadastrar-se
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
