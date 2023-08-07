import { Peca } from './peca';
import { TabuleiroCasa } from './tabuleiro-casa';

export interface Tabuleiro {
  posicaoLua: number;
  ultimaPosicao: number;
  casas: TabuleiroCasa[];
  pecas: Peca[];
}
