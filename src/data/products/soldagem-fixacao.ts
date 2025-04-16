
import { Product } from "@/types";

export const soldagemFixacaoProducts: Product[] = [
  {
    id: 31,
    name: "Transformador 3000W",
    description: "Transformador de 3000W para alimentação de equipamentos em obras.",
    price: 120,
    imageUrl: "/lovable-uploads/22e56a97-a20e-4ed3-9012-6b453c790b29.png",
    category: "Soldagem e Fixação",
    available: true,
    brand: "Bambozzi",
    model: "BT-3000",
    specs: {
      potência: "3000W",
      entrada: "220V",
      saída: "110V/220V",
      peso: "15 kg"
    }
  }
];
