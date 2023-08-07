import { Component, Input } from '@angular/core';
import { Peca } from 'src/app/compartilhados/interfaces/peca';

@Component({
  selector: 'app-peca',
  templateUrl: './peca.component.html',
  styleUrls: ['./peca.component.scss'],
})
export class PecaComponent {
  @Input() peca!: Peca;
}
