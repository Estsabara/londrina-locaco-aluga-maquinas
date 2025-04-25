
import { Product } from "@/types";

export const compactacaoSoloProducts: Product[] = [
  {
    id: 3,
    name: "Compactador de Solo tipo 'Sapo'",
    description: "Compactador de solo tipo sapo para compactação de solos em obras de construção civil.",
    imageUrl: "/lovable-uploads/bfee7b17-a51d-4aa5-a315-7dcddcd321e6.png",
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
    imageUrl: "/lovable-uploads/784c5470-e25f-4ecf-b556-3e50419f5b52.png",
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
