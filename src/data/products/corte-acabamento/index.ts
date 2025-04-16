
import { Product } from "@/types";
import { serrasProducts } from "./serras";
import { esmerilhadeirasProducts } from "./esmerilhadeiras";
import { lixadeirasProducts } from "./lixadeiras";
import { plainasProducts } from "./plainas";
import { politrizesProducts } from "./politrizes";
import { cortadoresProducts } from "./cortadores";

// Combine all cutting and finishing products
export const corteAcabamentoProducts: Product[] = [
  ...serrasProducts,
  ...esmerilhadeirasProducts,
  ...lixadeirasProducts,
  ...plainasProducts,
  ...politrizesProducts,
  ...cortadoresProducts
];
