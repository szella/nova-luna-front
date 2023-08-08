import { Jogador } from './jogador';
import { Peca } from './peca';
import { TabuleiroCasa } from './tabuleiro-casa';

export interface Tabuleiro {
  posicaoLua: number;
  ultimaPosicao: number;
  ultimojogador: Jogador;
  casas: TabuleiroCasa[];
  pecas: Peca[];
}
