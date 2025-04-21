import { Product } from "@/types";

export const medicaoNiveisProducts: Product[] = [
  {
    id: 32,
    name: "Nível a Laser",
    description: "Nível a laser para alinhamentos horizontais e verticais com precisão.",
    price: 95,
    imageUrl: "/lovable-uploads/e7333ebe-ed60-4981-a745-1e5527e53f33.png",
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
    imageUrl: "/lovable-uploads/73ad5b66-5e72-46b6-9445-e4cf6d1cc268.png",
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
