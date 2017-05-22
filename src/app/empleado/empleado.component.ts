import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html'
})
export class EmpleadoComponent implements OnInit {
  public nombre = 'Componente Empleado';

  public empleado: Empleado;
  public trabajadores: Array<Empleado>;

  constructor() {
    this.empleado = new Empleado(
      'Jesús Gómez',
      25,
      'Programador',
      true
    );

    this.trabajadores = [
      new Empleado('Felix', 34, 'Programador', true),
      new Empleado('Posti', 33, 'Arquitecto', true),
      new Empleado('Ernesto', 38, 'Programador', false),
    ];
  }

  ngOnInit() {
    console.log(this.empleado);
    console.log(this.trabajadores);
  }
}
