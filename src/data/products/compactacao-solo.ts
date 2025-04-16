
import { Product } from "@/types";

export const compactacaoSoloProducts: Product[] = [
  {
    id: 3,
    name: "Compactador de Solo tipo 'Sapo'",
    description: "Compactador de solo tipo sapo para compactação de solos em obras de construção civil.",
    price: 180,
    imageUrl: "/lovable-uploads/2720b1ae-e88f-4c19-a1c2-c7342758535a.png",
    category: "Compactação de Solo",
    available: true,
    brand: "Weber",
    model: "SRV660",
    specs: {
      potência: "5.5 HP",
      peso: "70 kg",
      impacto: "13 kN",
      combustível: "Gasolina"
    }
  },
  {
    id: 4,
    name: "Placa Vibratória a Gasolina",
    description: "Placa vibratória a gasolina para compactação de solos, asfalto e pavimentação.",
    price: 160,
    imageUrl: "/lovable-uploads/01827dc5-e715-440a-af1d-36e2f0573521.png",
    category: "Compactação de Solo",
    available: true,
    brand: "Wacker Neuson",
    model: "WP1550A",
    specs: {
      potência: "5.0 HP",
      peso: "85 kg",
      força: "15 kN",
      combustível: "Gasolina"
    }
  }
];
