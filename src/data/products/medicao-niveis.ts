
import { Product } from "@/types";

export const medicaoNiveisProducts: Product[] = [
  {
    id: 32,
    name: "Nível a Laser",
    description: "Nível a laser para alinhamentos horizontais e verticais com precisão.",
    price: 95,
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_782901-MLB50920445536_072022-O.webp",
    category: "Medição e Níveis",
    available: true,
    brand: "Bosch",
    model: "GLL 2-12",
    specs: {
      alcance: "12 metros",
      precisão: "0.3mm/m",
      tipo: "Linhas cruzadas",
      bateria: "AA"
    }
  },
  {
    id: 33,
    name: "Escada de Extensão 10m",
    description: "Escada de extensão de 10 metros para trabalhos em altura.",
    price: 110,
    imageUrl: "https://http2.mlstatic.com/D_NQ_NP_889827-MLB71638546271_092023-O.webp",
    category: "Medição e Níveis",
    available: true,
    brand: "Alulev",
    model: "AE-10",
    specs: {
      altura: "10 metros",
      material: "Alumínio",
      degraus: "24",
      capacidade: "120 kg"
    }
  }
];
