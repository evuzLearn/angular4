import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit {
  private nombre_componente: string;
  private listado_fruta: string;

  constructor() {
    this.nombre_componente = 'Componente de fruta';
    this.listado_fruta = 'Naranja, Manzana, Pera y Sandía';
  }

  ngOnInit() {
    this.helloWorld('Jesús');
  }

  helloWorld(nombre) {
    alert('Hello World! ' + nombre);
  }
}
