
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { LoginDialog } from "./nav/LoginDialog";
import { MobileMenu } from "./nav/MobileMenu";
import { NavigationLinks } from "./nav/NavigationLinks";
import { CartButton } from "./nav/CartButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { cartItems } = useCart();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  
  return (
    <header className="sticky top-0 z-50 bg-black shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/a318feda-ccf9-4034-8132-160b1fd158c6.png" 
            alt="Londrina Locações" 
            className="h-8 md:h-10 max-w-full object-contain"
          />
        </Link>
        
        <NavigationLinks />
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 border-2 border-primary hover:bg-primary/10 hover:text-primary text-primary font-medium shadow-sm px-3 py-1"
            onClick={() => setIsLoginOpen(true)}
          >
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline text-sm">Admin</span>
          </Button>
          
          <CartButton quantity={cartQuantity} />
          
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
        
        <MobileMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)}
          onLoginClick={() => setIsLoginOpen(true)}
        />
        
        <LoginDialog 
          isOpen={isLoginOpen}
          onOpenChange={setIsLoginOpen}
        />
      </div>
    </header>
  );
};

export default Navbar;
