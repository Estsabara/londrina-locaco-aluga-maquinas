
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

interface CartButtonProps {
  quantity: number;
}

export function CartButton({ quantity }: CartButtonProps) {
  return (
    <Link to="/carrinho" className="relative p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group">
      <ShoppingCart className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
      {quantity > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-semibold px-1.5 py-0.5 rounded-full min-w-[20px] flex items-center justify-center">
          {quantity}
        </span>
      )}
    </Link>
  );
}
