
import { Product } from "@/types";

export const soldagemFixacaoProducts: Product[] = [
  {
    id: 31,
    name: "Transformador 3000W",
    description: "Transformador de 3000W para alimentação de equipamentos em obras.",
    price: 120,
    imageUrl: "https://images.tcdn.com.br/img/img_prod/752353/transformador_3000va_bivolt_110v_220v_e_220v_110v_25_1_8618ef59c1f6a14e2ca9abfe4cf87ac2.jpg",
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
  }
];
