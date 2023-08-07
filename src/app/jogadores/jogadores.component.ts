import { Component, OnInit } from '@angular/core';
import { Jogador } from '../compartilhados/interfaces/jogador';
import { JogoService } from '../compartilhados/services/jogo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.scss'],
})
export class JogadoresComponent implements OnInit {
  jogadores: Jogador[] = [];

  constructor(private service: JogoService, private router: Router) {}

  ngOnInit(): void {
    this.carregarJogadores();
  }

  carregarJogadores() {
    this.service.jogadores().subscribe((jogadores: Jogador[]) => {
      this.jogadores = jogadores;
    });
  }

  iniciarPartida() {
    this.service.iniciarPartida().subscribe(() => {
      this.router.navigateByUrl('/tabuleiro')
    });
  }
}
