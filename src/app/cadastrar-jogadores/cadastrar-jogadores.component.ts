import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JogoService } from '../compartilhados/services/jogo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-jogadores',
  templateUrl: './cadastrar-jogadores.component.html',
  styleUrls: ['./cadastrar-jogadores.component.scss'],
})
export class CadastrarJogadoresComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: JogoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.criarformulario();
  }

  criarformulario(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required]],
      cor: ['', [Validators.required]],
    });
  }

  salvar() {
    this.service.criarJogador(this.formulario.value).subscribe(() => {
      this.router.navigateByUrl('/jogadores');
    });
  }
}
