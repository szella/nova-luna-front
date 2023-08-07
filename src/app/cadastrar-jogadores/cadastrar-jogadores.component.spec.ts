import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarJogadoresComponent } from './cadastrar-jogadores.component';

describe('CadastrarJogadoresComponent', () => {
  let component: CadastrarJogadoresComponent;
  let fixture: ComponentFixture<CadastrarJogadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarJogadoresComponent]
    });
    fixture = TestBed.createComponent(CadastrarJogadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
