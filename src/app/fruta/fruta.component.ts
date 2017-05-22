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

    // Variables y alcance
    var uno = 8;
    var dos = 15;

    if (uno === 8) {
      let uno = 3;
      var dos = 88;

      console.log('If uno: ' + uno);
      console.log('If dos: ' + dos);
    }

    console.log(uno);
    console.log(dos);
  }

  helloWorld(nombre) {
    console.log('Hello World! ' + nombre);
  }
}
