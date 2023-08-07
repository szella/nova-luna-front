import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarJogadoresComponent } from './cadastrar-jogadores/cadastrar-jogadores.component';
import { PrincipalComponent } from './principal/principal.component';
import { JogadoresComponent } from './jogadores/jogadores.component';
import { TabuleiroComponent } from './tabuleiro/tabuleiro.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PrincipalComponent,
  },
  {
    path: 'cadastrar-jogador',
    component: CadastrarJogadoresComponent,
  },
  {
    path: 'jogadores',
    component: JogadoresComponent,
  },
  {
    path: 'tabuleiro',
    component: TabuleiroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
