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
  public trabajador_externo: boolean;
  public color: string;

  constructor() {
    this.empleado = new Empleado(
      'Jesús Gómez',
      25,
      'Programador',
      true
    );

    this.trabajadores = [
      new Empleado('Felix', 34, 'Músico', false),
      new Empleado('Posti', 33, 'Arquitecto', true),
      new Empleado('Ernesto', 38, 'Programador', false),
    ];

    this.trabajador_externo = false;
    this.color = 'blue';
  }

  ngOnInit() {
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  cambiarExterno(value) {
    this.trabajador_externo = value;
  }
}
