
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const isMobile = useIsMobile();
  
  const cartItemCount = getCartItemCount();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/fd844232-ed4e-417c-9466-26ce847d8051.png" 
            alt="Londrina Locações" 
            className="h-12 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Início
          </Link>
          <Link to="/produtos" className="text-foreground hover:text-primary transition-colors">
            Equipamentos
          </Link>
          <Link to="/sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre Nós
          </Link>
          <Link to="/contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
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
        </div>
      )}
    </header>
  );
}
