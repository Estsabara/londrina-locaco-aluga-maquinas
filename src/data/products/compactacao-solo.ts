
import { Product } from "@/types";

export const compactacaoSoloProducts: Product[] = [
  {
    id: 3,
    name: "Compactador de Solo tipo 'Sapo'",
    description: "Compactador de solo tipo sapo para compactação de solos em obras de construção civil.",
    price: 180,
    imageUrl: "/lovable-uploads/937d58f0-598f-470a-9c9a-b7281b0a4f73.png",
    category: "Compactação de Solo",
    available: true,
    brand: "Weber",
    model: "SRV660",
    specs: {
      potência: "5.5 HP",
      peso: "70 kg",
      impacto: "13 kN",
      combustível: "Gasolina"
    }
  },
  {
    id: 4,
    name: "Placa Vibratória a Gasolina",
    description: "Placa vibratória a gasolina para compactação de solos, asfalto e pavimentação.",
    price: 160,
    imageUrl: "/lovable-uploads/ebcb398e-dd21-4cd4-a4dd-6ad56d0ba164.png",
    category: "Compactação de Solo",
    available: true,
    brand: "Wacker Neuson",
    model: "WP1550A",
    specs: {
      potência: "5.0 HP",
      peso: "85 kg",
      força: "15 kN",
      combustível: "Gasolina"
    }
  }
];
