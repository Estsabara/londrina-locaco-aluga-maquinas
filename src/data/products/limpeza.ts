
import { Product } from "@/types";

export const limpezaProducts: Product[] = [
  {
    id: 34,
    name: "Lavadora de Alta Pressão HD 585",
    description: "Lavadora de alta pressão profissional para limpeza pesada.",
    price: 120,
    imageUrl: "/lovable-uploads/39df544d-e5cc-4204-9a92-10ed5445eec0.png",
    category: "Limpeza",
    available: true,
    brand: "Karcher",
    model: "HD 585",
    specs: {
      pressão: "1740 PSI",
      vazão: "500 L/h",
      potência: "1.5 kW",
      voltagem: "220V"
    }
  },
  {
    id: 35,
    name: "Lixadeira Orbital Dewalt",
    description: "Lixadeira orbital 1/4 de folha para acabamentos finos.",
    price: 65,
    imageUrl: "/lovable-uploads/74580b16-b823-48bf-ab99-8b5a7250072d.png",
    category: "Limpeza",
    available: true,
    brand: "Dewalt",
    model: "DWE6411",
    specs: {
      potência: "230W",
      orbitas: "14000 opm",
      base: "1/4 folha",
      peso: "1.1 kg"
    }
  }
];
