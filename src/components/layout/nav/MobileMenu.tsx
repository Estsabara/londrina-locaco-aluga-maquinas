
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
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-md p-4 z-50 max-h-[80vh] overflow-y-auto">
      <div className="flex flex-col space-y-4">
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
