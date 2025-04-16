
import { Product } from "@/types";

export const movimentacaoElevacaoProducts: Product[] = [
  {
    id: 36,
    name: "Talha Manual 5m",
    description: "Talha manual com 5 metros de corrente para elevação de cargas.",
    price: 85,
    imageUrl: "/lovable-uploads/a735da81-e6d3-4e33-9f0c-bf047ad98d8b.png",
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
    imageUrl: "/lovable-uploads/b264964b-b1ce-43e4-bab2-54659c97666d.png",
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
