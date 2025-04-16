
import { Product } from "@/types";

export const limpezaProducts: Product[] = [
  {
    id: 34,
    name: "Aspirador de Pó para Sólidos e Líquidos",
    description: "Aspirador de pó para sólidos e líquidos, ideal para limpeza de obras.",
    price: 90,
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_806557-MLU71648115203_092023-O.webp",
    category: "Limpeza",
    available: true,
    brand: "Wap",
    model: "GTW 20",
    specs: {
      potência: "1600W",
      capacidade: "20 litros",
      voltagem: "220V",
      mangueira: "2.5 metros"
    }
  },
  {
    id: 35,
    name: "Lavadora de Alta Pressão 16L",
    description: "Lavadora de alta pressão de 16 litros/min para limpeza de superfícies.",
    price: 120,
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_669232-MLB53687516740_022023-O.webp",
    category: "Limpeza",
    available: true,
    brand: "Wap",
    model: "Super 2600",
    specs: {
      potência: "1900W",
      pressão: "2600 PSI",
      vazão: "16L/min",
      voltagem: "220V"
    }
  }
];
