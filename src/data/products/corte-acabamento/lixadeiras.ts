
import { Product } from "@/types";

export const lixadeirasProducts: Product[] = [
  {
    id: 24,
    name: "Lixadeira Orbital",
    description: "Lixadeira orbital para acabamento fino em madeira, metal e outros materiais.",
    price: 55,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Makita",
    model: "BO3710",
    specs: {
      potência: "190W",
      órbitas: "12000 opm",
      base: "1/3 de folha",
      peso: "1.6 kg"
    }
  },
  {
    id: 25,
    name: "Lixadeira de Parede",
    description: "Lixadeira de parede e teto para lixamento de gesso e massa corrida.",
    price: 120,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Makita",
    model: "PC5000C",
    specs: {
      potência: "1400W",
      diâmetro: "225mm",
      velocidade: "1000-2000 rpm",
      peso: "4.5 kg"
    }
  }
];
