import { Component, Input, OnInit } from '@angular/core';
import { Desafio } from 'src/app/compartilhados/interfaces/desafio';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.component.html',
  styleUrls: ['./desafio.component.scss'],
})
export class DesafioComponent implements OnInit {
  @Input() desafio!: Desafio;

  cores: string[] = [];

  ngOnInit(): void {
        for (let i = 0; i < this.desafio.amarelo; i++) {
      this.cores.push('AMARELO');
    }
    for (let i = 0; i < this.desafio.azul; i++) {
      this.cores.push('AZUL');
    }
    for (let i = 0; i < this.desafio.verde; i++) {
      this.cores.push('VERDE');
    }
    for (let i = 0; i < this.desafio.vermelho; i++) {
      this.cores.push('VERMELHO');
    }
  }
}
