import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent {
  public nombre_componente = 'Componente de fruta';
  public listado_fruta = 'Naranja, Manzana, Pera y Sandía';
}
