
import React from "react";
import { Link } from "react-router-dom";

export function NavigationLinks() {
  return (
    <nav className="hidden md:flex space-x-8">
      <Link
        to="/"
        className="text-gray-700 hover:text-primary transition-colors font-medium"
      >
        Início
      </Link>
      <Link
        to="/produtos"
        className="text-gray-700 hover:text-primary transition-colors font-medium"
      >
        Produtos
      </Link>
      <Link
        to="/sobre"
        className="text-gray-700 hover:text-primary transition-colors font-medium"
      >
        Sobre Nós
      </Link>
    </nav>
  );
}
