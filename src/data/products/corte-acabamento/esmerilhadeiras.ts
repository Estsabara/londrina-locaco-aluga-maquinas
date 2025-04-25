
import { Product } from "@/types";

export const esmerilhadeirasProducts: Product[] = [
  {
    id: 22,
    name: "Esmerilhadeira Makita 4.5\"",
    description: "Esmerilhadeira angular Makita compacta de 4.5 polegadas para trabalhos de corte e desbaste.",
    imageUrl: "/lovable-uploads/ed3abff8-1925-4fe4-ba9e-26276558fc9f.png",
    category: "Corte e Acabamento",
    available: true,
    brand: "Makita",
    model: "9557HNB",
    specs: {
      potência: "840W",
      disco: "4-1/2\"",
      velocidade: "11000 rpm",
      peso: "2.0 kg"
    }
  },
  {
    id: 23,
    name: "Esmerilhadeira Bosch 7\"",
    description: "Esmerilhadeira angular Bosch profissional de 7 polegadas para trabalhos pesados.",
    imageUrl: "/lovable-uploads/076002dd-edd6-4c2d-b416-451e403993ae.png",
    category: "Corte e Acabamento",
    available: true,
    brand: "Bosch",
    model: "GWS 22-180",
    specs: {
      potência: "2200W",
      disco: "7\"",
      velocidade: "8500 rpm",
      peso: "5.3 kg"
    }
  }
];
