import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center text-primary font-bold text-xl">
          <ShoppingCart className="mr-2" />
          MaqLoc
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
          <Link
            to="/admin"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Admin
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
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
              <Link
                to="/admin"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
