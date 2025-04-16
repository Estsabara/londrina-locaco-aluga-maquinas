
import { Product } from "@/types";

export const movimentacaoElevacaoProducts: Product[] = [
  {
    id: 36,
    name: "Talha Manual 5m",
    description: "Talha manual com 5 metros de corrente para elevação de cargas.",
    price: 85,
    imageUrl: "/lovable-uploads/6d29ae63-55ff-440d-8ee1-fe85d292f115.png",
    category: "Movimentação e Elevação",
    available: true,
    brand: "Sansei",
    model: "TCS-1000",
    specs: {
      capacidade: "1000 kg",
      altura: "5 metros",
      tipo: "Corrente",
      material: "Aço"
    }
  },
  {
    id: 37,
    name: "Paleteira Manual",
    description: "Paleteira manual para movimentação de cargas paletizadas.",
    price: 75,
    imageUrl: "/lovable-uploads/fb7c88fb-82ca-4959-9a71-1052c95e0e52.png",
    category: "Movimentação e Elevação",
    available: true,
    brand: "Paletrans",
    model: "TM2220",
    specs: {
      capacidade: "2200 kg",
      garfos: "1150mm",
      largura: "685mm",
      peso: "75 kg"
    }
  }
];
