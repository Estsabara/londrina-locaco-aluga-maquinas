
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Perfurador Profissional",
    description: "Perfurador profissional de alto desempenho com 3 modos de operação, ideal para obras de grande porte.",
    price: 120, // R$ per day
    imageUrl: "/placeholder.svg",
    category: "Perfuradores",
    available: true,
    brand: "Bosch",
    model: "GBH 4-32 DFR",
    specs: {
      potência: "900W",
      peso: "4.7 kg",
      impacto: "0-4000 ipm",
      velocidade: "0-800 rpm"
    }
  },
  {
    id: 2,
    name: "Furadeira de Impacto Industrial",
    description: "Furadeira de impacto industrial para trabalhos pesados em concreto e alvenaria.",
    price: 85, // R$ per day
    imageUrl: "/placeholder.svg",
    category: "Furadeiras",
    available: true,
    brand: "DeWalt",
    model: "DWD520",
    specs: {
      potência: "1100W",
      peso: "3.2 kg",
      impacto: "0-3400 ipm",
      velocidade: "0-1200 rpm"
    }
  },
  {
    id: 3,
    name: "Martelete Demolidor",
    description: "Martelete demolidor potente para trabalhos de demolição em concreto e alvenaria.",
    price: 150, // R$ per day
    imageUrl: "/placeholder.svg",
    category: "Marteletes",
    available: true,
    brand: "Makita",
    model: "HM1203C",
    specs: {
      potência: "1500W",
      peso: "9.7 kg",
      impacto: "950-1900 ipm",
      energia: "25.5 joules"
    }
  },
  {
    id: 4,
    name: "Compactador de Solo",
    description: "Compactador de solo tipo sapo para compactação de solos em obras de construção civil.",
    price: 180, // R$ per day
    imageUrl: "/placeholder.svg",
    category: "Compactadores",
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
    id: 5,
    name: "Betoneira Portátil",
    description: "Betoneira portátil com capacidade de 120 litros, ideal para pequenas obras.",
    price: 110, // R$ per day
    imageUrl: "/placeholder.svg",
    category: "Betoneiras",
    available: true,
    brand: "CSM",
    model: "CS120L",
    specs: {
      capacidade: "120 litros",
      potência: "0.5 HP",
      peso: "45 kg",
      voltagem: "220V"
    }
  },
  {
    id: 6,
    name: "Serra Circular de Bancada",
    description: "Serra circular de bancada para cortes precisos em madeira e derivados.",
    price: 95, // R$ per day
    imageUrl: "/placeholder.svg",
    category: "Serras",
    available: true,
    brand: "Makita",
    model: "2704",
    specs: {
      potência: "1650W",
      disco: "10\"",
      corte: "79mm",
      velocidade: "4800 rpm"
    }
  }
];

export const categories = [
  "Todos",
  "Perfuradores",
  "Furadeiras",
  "Marteletes",
  "Compactadores",
  "Betoneiras",
  "Serras"
];
