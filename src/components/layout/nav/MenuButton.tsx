
import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export function MenuButton({ onClick, isOpen }: MenuButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <Menu className="h-5 w-5 text-gray-700 hover:text-primary transition-colors" />
    </Button>
  );
}
