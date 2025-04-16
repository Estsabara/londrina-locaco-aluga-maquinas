
import { Product } from "@/types";

export const energiaProducts: Product[] = [
  {
    id: 39,
    name: "Gerador de Energia 8kVA",
    description: "Gerador de energia de 8kVA para alimentação elétrica em locais sem rede.",
    price: 250,
    imageUrl: "/lovable-uploads/3b0bceff-5dd4-446a-bd4f-5d0ecb5487ed.png",
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
