
import React from "react";
import { Link } from "react-router-dom";

export function NavigationLinks() {
  return (
    <nav className="hidden md:flex justify-center space-x-8">
      <Link
        to="/"
        className="text-white hover:text-primary transition-colors font-medium"
      >
        Início
      </Link>
      <Link
        to="/produtos"
        className="text-white hover:text-primary transition-colors font-medium"
      >
        Produtos
      </Link>
      <Link
        to="/sobre"
        className="text-white hover:text-primary transition-colors font-medium"
      >
        Sobre Nós
      </Link>
    </nav>
  );
}
