
import { Product } from "@/types";

export const energiaProducts: Product[] = [
  {
    id: 39,
    name: "Gerador de Energia 8kVA",
    description: "Gerador de energia de 8kVA para alimentação elétrica em locais sem rede.",
    price: 250,
    imageUrl: "/lovable-uploads/05e89067-09ce-4975-bee9-eb43f7785968.png",
    category: "Energia",
    available: true,
    brand: "Toyama",
    model: "TG8000CXE",
    specs: {
      potência: "8kVA",
      motor: "16 HP",
      combustível: "Diesel",
      autonomia: "8h"
    }
  }
];
