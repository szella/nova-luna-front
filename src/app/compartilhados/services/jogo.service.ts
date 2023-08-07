import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jogador } from '../interfaces/jogador';
import { Tabuleiro } from '../interfaces/tabuleiro';

@Injectable({ providedIn: 'root' })
export class JogoService {
  private readonly API = 'http://localhost:8080/jogo';

  constructor(private http: HttpClient) {}

  criarJogador(criarJogador: Jogador): Observable<void> {
    return this.http.post<void>(`${this.API}/iniciar-jogador`, criarJogador);
  }

  jogadores(): Observable<Jogador[]> {
    return this.http.get<Jogador[]>(`${this.API}/jogadores`);
  }

  iniciarPartida(): Observable<void> {
    return this.http.get<void>(`${this.API}/iniciar-partida`);
  }

  tabuleiro(): Observable<Tabuleiro> {
    return this.http.get<Tabuleiro>(`${this.API}/tabuleiro`);
  }

  pegarPeca(corJogador: string, posicaoPeca: number): Observable<void> {
    return this.http.get<void>(
      `${this.API}/pegar-peca/${corJogador}/${posicaoPeca}/0/0`
    );
  }
}
