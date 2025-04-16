
import { Product } from "@/types";

export const esmerilhadeirasProducts: Product[] = [
  {
    id: 22,
    name: "Esmerilhadeira 4\"",
    description: "Esmerilhadeira de 4 polegadas para corte, desbaste e acabamento.",
    price: 60,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Makita",
    model: "9557HNB",
    specs: {
      potência: "840W",
      disco: "4-1/2\"",
      velocidade: "11000 rpm",
      peso: "2.0 kg"
    }
  },
  {
    id: 23,
    name: "Esmerilhadeira 7\"",
    description: "Esmerilhadeira de 7 polegadas para trabalhos pesados de corte e desbaste.",
    price: 80,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Bosch",
    model: "GWS 22-180",
    specs: {
      potência: "2200W",
      disco: "7\"",
      velocidade: "8500 rpm",
      peso: "5.3 kg"
    }
  }
];
