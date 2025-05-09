
import { Product } from "@/types";

export const cortadoresProducts: Product[] = [
  {
    id: 28,
    name: "Cortador Angular 14\"",
    description: "Cortador angular de 14 polegadas para cortes em concreto, asfalto e materiais de construção.",
    price: 140,
    imageUrl: "/lovable-uploads/a1746276-6e0a-497e-91d6-bf2007ea9a76.png",
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
    imageUrl: "/lovable-uploads/585db949-3a3c-4c93-9268-6dc983a72019.png",
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
    imageUrl: "/lovable-uploads/21fd5ee3-878f-4059-b21f-e36aa9aee1b7.png",
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
