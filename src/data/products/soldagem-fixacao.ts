
import { Product } from "@/types";

export const soldagemFixacaoProducts: Product[] = [
  {
    id: 31,
    name: "Transformador 3000W",
    description: "Transformador de 3000W para alimentação de equipamentos em obras.",
    price: 120,
    imageUrl: "/lovable-uploads/e27e45a6-708a-4166-a128-ac3aba14d9e2.png",
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
