import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabuleiroComponent } from './tabuleiro/tabuleiro.component';
import { PrincipalComponent } from './principal/principal.component';
import { CadastrarJogadoresComponent } from './cadastrar-jogadores/cadastrar-jogadores.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JogadoresComponent } from './jogadores/jogadores.component';
import { PecaComponent } from './componentes/peca/peca.component';
import { DesafioComponent } from './componentes/desafio/desafio.component';

@NgModule({
  declarations: [
    AppComponent,
    TabuleiroComponent,
    PrincipalComponent,
    CadastrarJogadoresComponent,
    JogadoresComponent,
    PecaComponent,
    DesafioComponent,
  ],
  imports: [
    BrowserModule,

    ReactiveFormsModule,
    HttpClientModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
