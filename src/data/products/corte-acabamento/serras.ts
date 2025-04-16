
import { Product } from "@/types";

export const serrasProducts: Product[] = [
  {
    id: 18,
    name: "Serra Circular",
    description: "Serra circular para cortes precisos em madeira e derivados.",
    price: 85,
    imageUrl: "/lovable-uploads/79db7352-96c6-425e-aa66-6f9a9bf1408b.png",
    category: "Corte e Acabamento",
    available: true,
    brand: "Makita",
    model: "5007N",
    specs: {
      potência: "1800W",
      disco: "7-1/4\"",
      corte: "60mm a 90°",
      velocidade: "5800 rpm"
    }
  },
  {
    id: 19,
    name: "Serra Mármore",
    description: "Serra mármore para cortes em mármore, granito, cerâmica e concreto.",
    price: 75,
    imageUrl: "/lovable-uploads/b9115cdb-97d8-45f0-8df3-3f036d5c62e8.png",
    category: "Corte e Acabamento",
    available: true,
    brand: "Makita",
    model: "4100NH2Z",
    specs: {
      potência: "1400W",
      disco: "4-3/8\"",
      corte: "32mm",
      velocidade: "13000 rpm"
    }
  },
  {
    id: 20,
    name: "Serra Tico-Tico",
    description: "Serra tico-tico para cortes curvos e retos em madeira, metal e plástico.",
    price: 65,
    imageUrl: "/lovable-uploads/fa282a31-728f-4feb-9593-28f1d3375b12.png",
    category: "Corte e Acabamento",
    available: true,
    brand: "Bosch",
    model: "GST 650",
    specs: {
      potência: "450W",
      curso: "20mm",
      capacidade: "65mm madeira, 10mm aço",
      velocidade: "3100 cpm"
    }
  },
  {
    id: 21,
    name: "Serra Policorte",
    description: "Serra policorte para cortes em metais, perfis e tubos.",
    price: 95,
    imageUrl: "/lovable-uploads/8a5d2e22-e8cf-43cf-8b32-ce6d916be47b.png",
    category: "Corte e Acabamento",
    available: true,
    brand: "Dewalt",
    model: "DW872",
    specs: {
      potência: "2200W",
      disco: "14\"",
      capacidade: "120mm redondo",
      velocidade: "1300 rpm"
    }
  }
];
