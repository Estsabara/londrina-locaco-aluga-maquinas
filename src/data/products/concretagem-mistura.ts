
import { Product } from "@/types";

export const concretagemMisturaProducts: Product[] = [
  {
    id: 1,
    name: "Betoneira 400L com motor",
    description: "Betoneira com capacidade de 400 litros, ideal para obras de grande porte.",
    price: 150,
    imageUrl: "/placeholder.svg",
    category: "Concretagem e Mistura",
    available: true,
    brand: "CSM",
    model: "400L",
    specs: {
      capacidade: "400 litros",
      potência: "2 HP",
      peso: "150 kg",
      voltagem: "220V"
    }
  },
  {
    id: 2,
    name: "Misturador de Argamassa Elétrico 220V",
    description: "Misturador de argamassa elétrico para preparação de massas e argamassas.",
    price: 90,
    imageUrl: "/placeholder.svg",
    category: "Concretagem e Mistura",
    available: true,
    brand: "Menegotti",
    model: "MX-60",
    specs: {
      potência: "1.5 HP",
      capacidade: "60 litros",
      voltagem: "220V",
      peso: "35 kg"
    }
  },
  {
    id: 40,
    name: "Vibrador de Concreto com Mangote 35mm",
    description: "Vibrador de concreto com mangote de 35mm para vibração de concreto em formas.",
    price: 110,
    imageUrl: "/placeholder.svg",
    category: "Concretagem e Mistura",
    available: true,
    brand: "Wacker Neuson",
    model: "IREN38",
    specs: {
      potência: "1.5 HP",
      mangote: "35mm x 6m",
      rotação: "18000 rpm",
      voltagem: "220V"
    }
  },
  {
    id: 41,
    name: "Mangote Vibrador 25, 35, 45mm",
    description: "Mangotes para vibrador de concreto nos diâmetros 25, 35 e 45mm.",
    price: 45,
    imageUrl: "/placeholder.svg",
    category: "Concretagem e Mistura",
    available: true,
    brand: "Wacker Neuson",
    model: "Variados",
    specs: {
      diâmetros: "25, 35, 45mm",
      comprimento: "6 metros",
      material: "Aço especial",
      compatibilidade: "Universal"
    }
  },
  {
    id: 42,
    name: "Motor a Gasolina para Mangote e Bomba",
    description: "Motor a gasolina para acionar mangotes de vibração e bombas d'água.",
    price: 120,
    imageUrl: "/placeholder.svg",
    category: "Concretagem e Mistura",
    available: true,
    brand: "Honda",
    model: "GX160",
    specs: {
      potência: "5.5 HP",
      cilindrada: "163cc",
      combustível: "Gasolina",
      tipo: "4 tempos"
    }
  },
  {
    id: 43,
    name: "Motor Vibrador 220V",
    description: "Motor vibrador elétrico 220V para vibração de concreto.",
    price: 95,
    imageUrl: "/placeholder.svg",
    category: "Concretagem e Mistura",
    available: true,
    brand: "Wacker Neuson",
    model: "M2000",
    specs: {
      potência: "2.0 HP",
      voltagem: "220V",
      rotação: "18000 rpm",
      peso: "6 kg"
    }
  }
];
