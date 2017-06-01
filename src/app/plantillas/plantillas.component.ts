import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html'
})

export class PlantillasComponent implements OnInit {
  public titulo: string;
  public administrador: boolean;

  constructor() {
    this.titulo = 'Plantillas ngTemplate Angular4';
    this.administrador = true;
  }

  ngOnInit() { }

  cambiarAdministrador(value) {
    this.administrador = value;
  }
}
