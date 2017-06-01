import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html'
})

export class PlantillasComponent implements OnInit {
  public titulo: string;
  constructor() {
    this.titulo = 'Plantillas ngTemplate Angular4';
  }

  ngOnInit() { }
}
