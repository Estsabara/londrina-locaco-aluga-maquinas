
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
}

export function MobileMenu({ isOpen, onClose, onLoginClick }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      role="navigation"
      aria-label="Mobile navigation"
      className={`md:hidden fixed inset-x-0 top-16 bg-white shadow-md z-50 transform transition-all duration-300 ease-in-out ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex flex-col space-y-4 p-4">
        <Link
          to="/"
          className="text-gray-700 hover:text-primary transition-colors py-2"
          onClick={onClose}
        >
          Início
        </Link>
        <Link
          to="/produtos"
          className="text-gray-700 hover:text-primary transition-colors py-2"
          onClick={onClose}
        >
          Produtos
        </Link>
        <Link
          to="/sobre"
          className="text-gray-700 hover:text-primary transition-colors py-2"
          onClick={onClose}
        >
          Sobre Nós
        </Link>
        <Button 
          variant="ghost" 
          className="flex items-center justify-start gap-2 px-0"
          onClick={() => {
            onLoginClick();
            onClose();
          }}
        >
          <Shield className="h-5 w-5" />
          <span>Administrativo</span>
        </Button>
      </div>
    </div>
  );
}
