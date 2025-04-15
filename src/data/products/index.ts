
import { Product } from "@/types";
import { concretagemMisturaProducts } from "./concretagem-mistura";
import { compactacaoSoloProducts } from "./compactacao-solo";
import { andaimesAcessoriosProducts } from "./andaimes-acessorios";
import { escoramentoProducts } from "./escoramento";
import { perfuracaoDemolicaoProducts } from "./perfuracao-demolicao";
import { corteAcabamentoProducts } from "./corte-acabamento";
import { soldagemFixacaoProducts } from "./soldagem-fixacao";
import { medicaoNiveisProducts } from "./medicao-niveis";
import { limpezaProducts } from "./limpeza";
import { movimentacaoElevacaoProducts } from "./movimentacao-elevacao";
import { segurancaProducts } from "./seguranca";
import { energiaProducts } from "./energia";
import { equipamentosDiversosProducts } from "./equipamentos-diversos";

// Categories list
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

// Combine all products
export const products: Product[] = [
  ...concretagemMisturaProducts,
  ...compactacaoSoloProducts,
  ...andaimesAcessoriosProducts,
  ...escoramentoProducts,
  ...perfuracaoDemolicaoProducts,
  ...corteAcabamentoProducts,
  ...soldagemFixacaoProducts,
  ...medicaoNiveisProducts,
  ...limpezaProducts,
  ...movimentacaoElevacaoProducts,
  ...segurancaProducts,
  ...energiaProducts,
  ...equipamentosDiversosProducts
];
