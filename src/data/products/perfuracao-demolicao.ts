
import { Product } from "@/types";

export const perfuracaoDemolicaoProducts: Product[] = [
  {
    id: 13,
    name: "Furadeira de Impacto com Mandril",
    description: "Furadeira de impacto com mandril para trabalhos em concreto, madeira e metal.",
    price: 80,
    imageUrl: "/placeholder.svg",
    category: "Perfuração e Demolição",
    available: true,
    brand: "Bosch",
    model: "GSB 16 RE",
    specs: {
      potência: "750W",
      mandril: "13mm",
      impacto: "0-48000 ipm",
      velocidade: "0-3000 rpm"
    }
  },
  {
    id: 14,
    name: "Martelete Perfurador 5kg",
    description: "Martelete perfurador de 5kg para trabalhos de perfuração em concreto e alvenaria.",
    price: 110,
    imageUrl: "/placeholder.svg",
    category: "Perfuração e Demolição",
    available: true,
    brand: "Makita",
    model: "HR4001C",
    specs: {
      potência: "1100W",
      peso: "5 kg",
      impacto: "1100-2500 ipm",
      energia: "6.2 joules"
    }
  },
  {
    id: 15,
    name: "Martelo Rompedor 16kg",
    description: "Martelo rompedor de 16kg para demolição de concreto e alvenaria.",
    price: 180,
    imageUrl: "/placeholder.svg",
    category: "Perfuração e Demolição",
    available: true,
    brand: "Bosch",
    model: "GSH 16",
    specs: {
      potência: "1750W",
      peso: "16 kg",
      impacto: "1300 ipm",
      energia: "41 joules"
    }
  },
  {
    id: 16,
    name: "Martelo Rompedor 30kg",
    description: "Martelo rompedor de 30kg para demolição pesada de concreto e alvenaria.",
    price: 240,
    imageUrl: "/placeholder.svg",
    category: "Perfuração e Demolição",
    available: true,
    brand: "Dewalt",
    model: "D25960K",
    specs: {
      potência: "2000W",
      peso: "30 kg",
      impacto: "870 ipm",
      energia: "68 joules"
    }
  },
  {
    id: 17,
    name: "Martelete Perfurador",
    description: "Martelete perfurador para trabalhos de perfuração em concreto e alvenaria.",
    price: 95,
    imageUrl: "/placeholder.svg",
    category: "Perfuração e Demolição",
    available: true,
    brand: "Makita",
    model: "HR2470",
    specs: {
      potência: "780W",
      peso: "2.6 kg",
      impacto: "0-4500 ipm",
      energia: "2.4 joules"
    }
  }
];
