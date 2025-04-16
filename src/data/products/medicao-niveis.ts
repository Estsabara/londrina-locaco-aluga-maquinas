
import { Product } from "@/types";

export const medicaoNiveisProducts: Product[] = [
  {
    id: 32,
    name: "Nível a Laser",
    description: "Nível a laser para alinhamentos horizontais e verticais com precisão.",
    price: 95,
    imageUrl: "/lovable-uploads/aa0e3c66-e812-4303-982b-1f47cb8f760c.png",
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
    imageUrl: "/lovable-uploads/fbe75dd4-8b9a-4d79-b6b2-79fb9b3d1beb.png",
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
