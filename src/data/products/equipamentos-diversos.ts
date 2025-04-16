
import { Product } from "@/types";

export const equipamentosDiversosProducts: Product[] = [
  {
    id: 44,
    name: "Acabador de Piso",
    description: "Acabador de piso para alisamento de concreto em grandes áreas.",
    price: 160,
    imageUrl: "/lovable-uploads/39ae5d25-7789-46ee-a813-abc210fe2042.png",
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
    imageUrl: "/lovable-uploads/190039d9-a609-48ae-85a5-61f9e4d23e27.png",
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
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_958723-MLB71647869023_092023-O.webp",
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
