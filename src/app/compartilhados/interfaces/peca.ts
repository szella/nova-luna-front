import { Desafio } from './desafio';

export interface Peca {
  id: number;
  passos: number;
  cor: string;
  desafios: Desafio[];
}
