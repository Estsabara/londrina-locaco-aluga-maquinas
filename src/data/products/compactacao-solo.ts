
import { Product } from "@/types";

export const compactacaoSoloProducts: Product[] = [
  {
    id: 3,
    name: "Compactador de Solo tipo 'Sapo'",
    description: "Compactador de solo tipo sapo para compactação de solos em obras de construção civil.",
    price: 180,
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_988869-MLB32829255566_112019-O.webp",
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
    imageUrl: "https://images.tcdn.com.br/img/img_prod/810107/placa_vibratoria_a_gasolina_motor_5_5_hp_196cc_compactador_cst55_1153_1_d0daa3e5c65c7d68c0eaeaa1bba95ca5.jpg",
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
