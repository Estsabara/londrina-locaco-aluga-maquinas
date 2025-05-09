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
  },
  {
    id: 52,
    name: "Serra Circular Dewalt 7-1/4\"",
    description: "Serra circular profissional para cortes precisos em madeira.",
    price: 75,
    imageUrl: "/lovable-uploads/2e4d25ea-eab0-4b07-a81e-02ae9e7a5988.png",
    category: "Corte e Acabamento",
    available: true,
    brand: "Dewalt",
    model: "DW384",
    specs: {
      potência: "1400W",
      disco: "7-1/4\"",
      velocidade: "5200 rpm",
      profundidade: "64mm"
    }
  },
  {
    id: 53,
    name: "Serra de Corte Rápido Dewalt",
    description: "Serra de corte rápido para metais com base reforçada e proteção.",
    price: 120,
    imageUrl: "/lovable-uploads/979c81a7-f3da-4aac-a32c-f00b7784ba39.png",
    category: "Corte e Acabamento",
    available: true,
    brand: "Dewalt",
    model: "D28730",
    specs: {
      potência: "2200W",
      disco: "14\"",
      velocidade: "3800 rpm",
      capacidade: "125mm"
    }
  },
  {
    id: 54,
    name: "Serra Tico-Tico Dewalt",
    description: "Serra tico-tico profissional com velocidade variável para cortes precisos.",
    price: 75,
    imageUrl: "/lovable-uploads/8b17d4ca-5046-427a-ad3b-173ecf78d9ab.png",
    category: "Corte e Acabamento",
    available: true,
    brand: "Dewalt",
    model: "DW331K",
    specs: {
      potência: "700W",
      curso: "26mm",
      velocidade: "0-3100 cpm",
      capacidade: "130mm madeira"
    }
  }
];
