
import { Product } from "@/types";

export const categories = [
  "Todos",
  "Concretagem e Mistura",
  "Compactação de Solo",
  "Andaimes e Acessórios",
  "Escoramento",
  "Perfuração e Demolição",
  "Corte e Acabamento",
  "Soldagem e Fixação",
  "Medição e Níveis",
  "Limpeza",
  "Movimentação e Elevação",
  "Segurança",
  "Energia",
  "Equipamentos Diversos"
];

export const products: Product[] = [
  // Concretagem e Mistura
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
  // Compactação de Solo
  {
    id: 3,
    name: "Compactador de Solo tipo 'Sapo'",
    description: "Compactador de solo tipo sapo para compactação de solos em obras de construção civil.",
    price: 180,
    imageUrl: "/placeholder.svg",
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
    imageUrl: "/placeholder.svg",
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
  },
  // Andaimes e Acessórios
  {
    id: 5,
    name: "Andaime Metálico",
    description: "Andaime metálico para trabalhos em altura com segurança.",
    price: 50,
    imageUrl: "/placeholder.svg",
    category: "Andaimes e Acessórios",
    available: true,
    brand: "Metax",
    model: "Standard",
    specs: {
      altura: "2 metros",
      largura: "1 metro",
      comprimento: "2 metros",
      capacidade: "300 kg"
    }
  },
  {
    id: 6,
    name: "Andaime com Escada de 2m",
    description: "Andaime com escada integrada para acesso mais fácil a alturas de até 2 metros.",
    price: 65,
    imageUrl: "/placeholder.svg",
    category: "Andaimes e Acessórios",
    available: true,
    brand: "Platafort",
    model: "Escada 2m",
    specs: {
      altura: "2 metros",
      largura: "1 metro",
      comprimento: "2 metros",
      capacidade: "250 kg"
    }
  },
  {
    id: 7,
    name: "Jogo de Guarda-Corpo para Andaime",
    description: "Jogo de guarda-corpo para andaime, essencial para segurança em trabalhos em altura.",
    price: 25,
    imageUrl: "/placeholder.svg",
    category: "Andaimes e Acessórios",
    available: true,
    brand: "Metax",
    model: "GC-1000",
    specs: {
      altura: "1 metro",
      comprimento: "2 metros",
      material: "Aço galvanizado",
      peso: "8 kg"
    }
  },
  {
    id: 8,
    name: "Piso Metálico para Andaime 1,0m",
    description: "Piso metálico para andaime com 1 metro de comprimento.",
    price: 15,
    imageUrl: "/placeholder.svg",
    category: "Andaimes e Acessórios",
    available: true,
    brand: "Metax",
    model: "PM-100",
    specs: {
      comprimento: "1 metro",
      largura: "0.5 metro",
      capacidade: "150 kg",
      material: "Aço galvanizado"
    }
  },
  {
    id: 9,
    name: "Piso Metálico para Andaime 1,5m",
    description: "Piso metálico para andaime com 1,5 metros de comprimento.",
    price: 20,
    imageUrl: "/placeholder.svg",
    category: "Andaimes e Acessórios",
    available: true,
    brand: "Metax",
    model: "PM-150",
    specs: {
      comprimento: "1.5 metros",
      largura: "0.5 metro",
      capacidade: "150 kg",
      material: "Aço galvanizado"
    }
  },
  {
    id: 10,
    name: "Sapata Ajustável para Andaime",
    description: "Sapata ajustável para nivelamento de andaimes em terrenos irregulares.",
    price: 10,
    imageUrl: "/placeholder.svg",
    category: "Andaimes e Acessórios",
    available: true,
    brand: "Metax",
    model: "SA-100",
    specs: {
      ajuste: "10-15 cm",
      material: "Aço galvanizado",
      capacidade: "500 kg",
      peso: "2 kg"
    }
  },
  {
    id: 11,
    name: "Roda para Andaime",
    description: "Roda para facilitar a movimentação de andaimes.",
    price: 12,
    imageUrl: "/placeholder.svg",
    category: "Andaimes e Acessórios",
    available: true,
    brand: "Metax",
    model: "RA-100",
    specs: {
      diâmetro: "15 cm",
      capacidade: "200 kg",
      material: "Borracha e aço",
      freio: "Sim"
    }
  },
  // Escoramento
  {
    id: 12,
    name: "Escoramento Metálico",
    description: "Escoramento metálico para suporte de lajes, vigas e estruturas.",
    price: 45,
    imageUrl: "/placeholder.svg",
    category: "Escoramento",
    available: true,
    brand: "SH",
    model: "EM-3000",
    specs: {
      altura: "3 metros",
      capacidade: "3000 kg",
      material: "Aço galvanizado",
      ajuste: "1.8-3.0 metros"
    }
  },
  // Perfuração e Demolição
  {
    id: 13,
    name: "Furadeira de Impacto com Mandril",
    description: "Furadeira de impacto com mandril para trabalhos em concreto, madeira e metal.",
    price: 80,
    imageUrl: "/placeholder.svg",
    category: "Perfuração e Demolição",
    available: true,
    brand: "Bosch",
    model: "GSB 16 RE",
    specs: {
      potência: "750W",
      mandril: "13mm",
      impacto: "0-48000 ipm",
      velocidade: "0-3000 rpm"
    }
  },
  {
    id: 14,
    name: "Martelete Perfurador 5kg",
    description: "Martelete perfurador de 5kg para trabalhos de perfuração em concreto e alvenaria.",
    price: 110,
    imageUrl: "/placeholder.svg",
    category: "Perfuração e Demolição",
    available: true,
    brand: "Makita",
    model: "HR4001C",
    specs: {
      potência: "1100W",
      peso: "5 kg",
      impacto: "1100-2500 ipm",
      energia: "6.2 joules"
    }
  },
  {
    id: 15,
    name: "Martelo Rompedor 16kg",
    description: "Martelo rompedor de 16kg para demolição de concreto e alvenaria.",
    price: 180,
    imageUrl: "/placeholder.svg",
    category: "Perfuração e Demolição",
    available: true,
    brand: "Bosch",
    model: "GSH 16",
    specs: {
      potência: "1750W",
      peso: "16 kg",
      impacto: "1300 ipm",
      energia: "41 joules"
    }
  },
  {
    id: 16,
    name: "Martelo Rompedor 30kg",
    description: "Martelo rompedor de 30kg para demolição pesada de concreto e alvenaria.",
    price: 240,
    imageUrl: "/placeholder.svg",
    category: "Perfuração e Demolição",
    available: true,
    brand: "Dewalt",
    model: "D25960K",
    specs: {
      potência: "2000W",
      peso: "30 kg",
      impacto: "870 ipm",
      energia: "68 joules"
    }
  },
  {
    id: 17,
    name: "Martelete Perfurador",
    description: "Martelete perfurador para trabalhos de perfuração em concreto e alvenaria.",
    price: 95,
    imageUrl: "/placeholder.svg",
    category: "Perfuração e Demolição",
    available: true,
    brand: "Makita",
    model: "HR2470",
    specs: {
      potência: "780W",
      peso: "2.6 kg",
      impacto: "0-4500 ipm",
      energia: "2.4 joules"
    }
  },
  // Corte e Acabamento
  {
    id: 18,
    name: "Serra Circular",
    description: "Serra circular para cortes precisos em madeira e derivados.",
    price: 85,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Makita",
    model: "5007N",
    specs: {
      potência: "1800W",
      disco: "7-1/4\"",
      corte: "60mm a 90°",
      velocidade: "5800 rpm"
    }
  },
  {
    id: 19,
    name: "Serra Mármore",
    description: "Serra mármore para cortes em mármore, granito, cerâmica e concreto.",
    price: 75,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Makita",
    model: "4100NH2Z",
    specs: {
      potência: "1400W",
      disco: "4-3/8\"",
      corte: "32mm",
      velocidade: "13000 rpm"
    }
  },
  {
    id: 20,
    name: "Serra Tico-Tico",
    description: "Serra tico-tico para cortes curvos e retos em madeira, metal e plástico.",
    price: 65,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Bosch",
    model: "GST 650",
    specs: {
      potência: "450W",
      curso: "20mm",
      capacidade: "65mm madeira, 10mm aço",
      velocidade: "3100 cpm"
    }
  },
  {
    id: 21,
    name: "Serra Policorte",
    description: "Serra policorte para cortes em metais, perfis e tubos.",
    price: 95,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Dewalt",
    model: "DW872",
    specs: {
      potência: "2200W",
      disco: "14\"",
      capacidade: "120mm redondo",
      velocidade: "1300 rpm"
    }
  },
  {
    id: 22,
    name: "Esmerilhadeira 4\"",
    description: "Esmerilhadeira de 4 polegadas para corte, desbaste e acabamento.",
    price: 60,
    imageUrl: "/placeholder.svg",
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
    name: "Esmerilhadeira 7\"",
    description: "Esmerilhadeira de 7 polegadas para trabalhos pesados de corte e desbaste.",
    price: 80,
    imageUrl: "/placeholder.svg",
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
  },
  {
    id: 24,
    name: "Lixadeira Orbital",
    description: "Lixadeira orbital para acabamento fino em madeira, metal e outros materiais.",
    price: 55,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Makita",
    model: "BO3710",
    specs: {
      potência: "190W",
      órbitas: "12000 opm",
      base: "1/3 de folha",
      peso: "1.6 kg"
    }
  },
  {
    id: 25,
    name: "Lixadeira de Parede",
    description: "Lixadeira de parede e teto para lixamento de gesso e massa corrida.",
    price: 120,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Makita",
    model: "PC5000C",
    specs: {
      potência: "1400W",
      diâmetro: "225mm",
      velocidade: "1000-2000 rpm",
      peso: "4.5 kg"
    }
  },
  {
    id: 26,
    name: "Plaina Elétrica",
    description: "Plaina elétrica para aplainamento e rebaixo em madeira.",
    price: 70,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Makita",
    model: "KP0800",
    specs: {
      potência: "620W",
      largura: "82mm",
      profundidade: "0-2.5mm",
      velocidade: "17000 rpm"
    }
  },
  {
    id: 27,
    name: "Politriz/Lixadeira",
    description: "Politriz/lixadeira para polimento e lixamento de superfícies.",
    price: 65,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Bosch",
    model: "GPO 14 CE",
    specs: {
      potência: "1400W",
      diâmetro: "180mm",
      velocidade: "750-3000 rpm",
      peso: "2.5 kg"
    }
  },
  {
    id: 28,
    name: "Cortador Angular 14\"",
    description: "Cortador angular de 14 polegadas para cortes em concreto, asfalto e materiais de construção.",
    price: 140,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Husqvarna",
    model: "K 770",
    specs: {
      potência: "5 HP",
      disco: "14\"",
      profundidade: "125mm",
      combustível: "Gasolina"
    }
  },
  {
    id: 29,
    name: "Cortador de Blocos e Pedras",
    description: "Cortador de blocos e pedras para cortes precisos em materiais de construção.",
    price: 130,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Norton",
    model: "Clipper",
    specs: {
      potência: "2.0 HP",
      disco: "350mm",
      profundidade: "110mm",
      voltagem: "220V"
    }
  },
  {
    id: 30,
    name: "Cortador de Piso Husqvarna",
    description: "Cortador de piso Husqvarna para cortes precisos em pisos cerâmicos e porcelanatos.",
    price: 150,
    imageUrl: "/placeholder.svg",
    category: "Corte e Acabamento",
    available: true,
    brand: "Husqvarna",
    model: "TS 250 F",
    specs: {
      potência: "1.5 HP",
      disco: "250mm",
      comprimento: "730mm",
      voltagem: "220V"
    }
  },
  // Soldagem e Fixação
  {
    id: 31,
    name: "Transformador 3000W",
    description: "Transformador de 3000W para alimentação de equipamentos em obras.",
    price: 120,
    imageUrl: "/placeholder.svg",
    category: "Soldagem e Fixação",
    available: true,
    brand: "Bambozzi",
    model: "BT-3000",
    specs: {
      potência: "3000W",
      entrada: "220V",
      saída: "110V/220V",
      peso: "15 kg"
    }
  },
  // Medição e Níveis
  {
    id: 32,
    name: "Nível a Laser",
    description: "Nível a laser para alinhamentos horizontais e verticais com precisão.",
    price: 95,
    imageUrl: "/placeholder.svg",
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
    imageUrl: "/placeholder.svg",
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
  },
  // Limpeza
  {
    id: 34,
    name: "Aspirador de Pó para Sólidos e Líquidos",
    description: "Aspirador de pó para sólidos e líquidos, ideal para limpeza de obras.",
    price: 90,
    imageUrl: "/placeholder.svg",
    category: "Limpeza",
    available: true,
    brand: "Wap",
    model: "GTW 20",
    specs: {
      potência: "1600W",
      capacidade: "20 litros",
      voltagem: "220V",
      mangueira: "2.5 metros"
    }
  },
  {
    id: 35,
    name: "Lavadora de Alta Pressão 16L",
    description: "Lavadora de alta pressão de 16 litros/min para limpeza de superfícies.",
    price: 120,
    imageUrl: "/placeholder.svg",
    category: "Limpeza",
    available: true,
    brand: "Wap",
    model: "Super 2600",
    specs: {
      potência: "1900W",
      pressão: "2600 PSI",
      vazão: "16L/min",
      voltagem: "220V"
    }
  },
  // Movimentação e Elevação
  {
    id: 36,
    name: "Talha Manual 5m",
    description: "Talha manual com 5 metros de corrente para elevação de cargas.",
    price: 85,
    imageUrl: "/placeholder.svg",
    category: "Movimentação e Elevação",
    available: true,
    brand: "Sansei",
    model: "TCS-1000",
    specs: {
      capacidade: "1000 kg",
      altura: "5 metros",
      tipo: "Corrente",
      material: "Aço"
    }
  },
  {
    id: 37,
    name: "Paleteira Manual",
    description: "Paleteira manual para movimentação de cargas paletizadas.",
    price: 75,
    imageUrl: "/placeholder.svg",
    category: "Movimentação e Elevação",
    available: true,
    brand: "Paletrans",
    model: "TM2220",
    specs: {
      capacidade: "2200 kg",
      garfos: "1150mm",
      largura: "685mm",
      peso: "75 kg"
    }
  },
  // Segurança
  {
    id: 38,
    name: "Cinto Paraquedista",
    description: "Cinto paraquedista para trabalhos em altura com segurança.",
    price: 40,
    imageUrl: "/placeholder.svg",
    category: "Segurança",
    available: true,
    brand: "Ultrasafe",
    model: "Completo",
    specs: {
      tipo: "4 pontos",
      material: "Poliéster",
      ajuste: "Rápido",
      certificação: "NR35"
    }
  },
  // Energia
  {
    id: 39,
    name: "Gerador de Energia 8kVA",
    description: "Gerador de energia de 8kVA para alimentação elétrica em locais sem rede.",
    price: 250,
    imageUrl: "/placeholder.svg",
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
  },
  // Equipamentos para Concretagem
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
  },
  // Equipamentos Diversos
  {
    id: 44,
    name: "Acabador de Piso",
    description: "Acabador de piso para alisamento de concreto em grandes áreas.",
    price: 160,
    imageUrl: "/placeholder.svg",
    category: "Equipamentos Diversos",
    available: true,
    brand: "Menegotti",
    model: "AP-120",
    specs: {
      potência: "6.5 HP",
      diâmetro: "120 cm",
      combustível: "Gasolina",
      peso: "95 kg"
    }
  },
  {
    id: 45,
    name: "Bomba Mangote 2\" ou 3\"",
    description: "Bomba mangote para transferência de água em obras.",
    price: 90,
    imageUrl: "/placeholder.svg",
    category: "Equipamentos Diversos",
    available: true,
    brand: "Honda",
    model: "WB30XT",
    specs: {
      diâmetro: "3\"",
      vazão: "1100 L/min",
      combustível: "Gasolina",
      pressão: "23 mca"
    }
  },
  {
    id: 46,
    name: "Soprador Térmico",
    description: "Soprador térmico para remoção de tintas, moldagem de plásticos e outros trabalhos com calor.",
    price: 55,
    imageUrl: "/placeholder.svg",
    category: "Equipamentos Diversos",
    available: true,
    brand: "Makita",
    model: "HG6500",
    specs: {
      potência: "2000W",
      temperatura: "50-650°C",
      fluxo: "500 L/min",
      voltagem: "220V"
    }
  }
];
