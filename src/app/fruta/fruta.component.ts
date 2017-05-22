import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent {
  nombre_componente = 'Componente de fruta';
  listado_fruta = 'Naranja, Manzana, Pera y Sandía';

  nombre:string = 'Jesús';
  edad:number = 12;
  mayorDeEdad:boolean = false;
  trabajos:Array<any> = ['Carpintero', 'Albañil', 24];
}
