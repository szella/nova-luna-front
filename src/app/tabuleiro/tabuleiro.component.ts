import { Tabuleiro } from './../compartilhados/interfaces/tabuleiro';
import { Component, OnInit } from '@angular/core';
import { JogoService } from '../compartilhados/services/jogo.service';
import { Peca } from '../compartilhados/interfaces/peca';

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.scss'],
})
export class TabuleiroComponent implements OnInit {
  tabuleiro!: Tabuleiro;

  constructor(private service: JogoService) {}

  ngOnInit(): void {
    this.carregarTabuleiro();
  }

  carregarTabuleiro() {
    this.service.tabuleiro().subscribe((tabuleiro: Tabuleiro) => {
      this.tabuleiro = tabuleiro;
    });
  }

  pegarPeca(posicaoPeca: number) {
    this.service
      .pegarPeca(this.tabuleiro.ultimojogador.cor, posicaoPeca)
      .subscribe(() => {
        this.carregarTabuleiro();
      });
  }

  carregarPecas() {
    this.service.carregarPecas().subscribe(() => {
      this.carregarTabuleiro();
    });
  }
}
