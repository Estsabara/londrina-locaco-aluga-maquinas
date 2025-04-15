
import { Product } from "@/types";

export const soldagemFixacaoProducts: Product[] = [
  {
    id: 31,
    name: "Transformador 3000W",
    description: "Transformador de 3000W para alimentação de equipamentos em obras.",
    price: 120,
    imageUrl: "/placeholder.svg",
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
