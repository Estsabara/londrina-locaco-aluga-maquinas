import { Product } from "@/types";

export const equipamentosDiversosProducts: Product[] = [
  {
    id: 44,
    name: "Acabador de Piso",
    description: "Acabador de piso para alisamento de concreto em grandes áreas.",
    price: 160,
    imageUrl: "/lovable-uploads/17a33fa5-9e28-490a-9d3a-04d32e4ae387.png",
    category: "Equipamentos Diversos",
    available: true,
    brand: "Menegotti",
    model: "AP-120",
    specs: {
      potência: "6.5 HP",
      diâmetro: "120 cm",
      combustível: "Gasolina",
      peso: "95 kg"
    }
  },
  {
    id: 45,
    name: "Bomba Mangote 2\" ou 3\"",
    description: "Bomba mangote para transferência de água em obras.",
    price: 90,
    imageUrl: "/lovable-uploads/6501ecea-db2e-4009-ac15-eb8d550f9a97.png",
    category: "Equipamentos Diversos",
    available: true,
    brand: "Honda",
    model: "WB30XT",
    specs: {
      diâmetro: "3\"",
      vazão: "1100 L/min",
      combustível: "Gasolina",
      pressão: "23 mca"
    }
  },
  {
    id: 46,
    name: "Soprador Térmico",
    description: "Soprador térmico para remoção de tintas, moldagem de plásticos e outros trabalhos com calor.",
    price: 55,
    imageUrl: "/lovable-uploads/8465964d-0a8d-45c1-8186-cc149282917d.png",
    category: "Equipamentos Diversos",
    available: true,
    brand: "Makita",
    model: "HG6500",
    specs: {
      potência: "2000W",
      temperatura: "50-650°C",
      fluxo: "500 L/min",
      voltagem: "220V"
    }
  }
];
