
import { Product } from "@/types";

export const cortadoresProducts: Product[] = [
  {
    id: 28,
    name: "Cortador Angular 14\"",
    description: "Cortador angular de 14 polegadas para cortes em concreto, asfalto e materiais de construção.",
    price: 140,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Husqvarna",
    model: "K 770",
    specs: {
      potência: "5 HP",
      disco: "14\"",
      profundidade: "125mm",
      combustível: "Gasolina"
    }
  },
  {
    id: 29,
    name: "Cortador de Blocos e Pedras",
    description: "Cortador de blocos e pedras para cortes precisos em materiais de construção.",
    price: 130,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Norton",
    model: "Clipper",
    specs: {
      potência: "2.0 HP",
      disco: "350mm",
      profundidade: "110mm",
      voltagem: "220V"
    }
  },
  {
    id: 30,
    name: "Cortador de Piso Husqvarna",
    description: "Cortador de piso Husqvarna para cortes precisos em pisos cerâmicos e porcelanatos.",
    price: 150,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Husqvarna",
    model: "TS 250 F",
    specs: {
      potência: "1.5 HP",
      disco: "250mm",
      comprimento: "730mm",
      voltagem: "220V"
    }
  }
];
