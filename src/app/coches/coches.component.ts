import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  providers: [PeticionesService]
})
export class CochesComponent implements OnInit{
  public coche: Coche;
  public coches: Array<Coche>;
  public articulos: Array<object>;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.coche = new Coche('', '', '');
    this.coches = [
      new Coche('Seat Panda', '120', 'Amarillo'),
      new Coche('Peugeot 208', '96', 'Blanco'),
    ];
  }

  ngOnInit() {
    this._peticionesService.getArticulos().subscribe(
      result => {
        this.articulos = result;
      },
      err => console.log(err)
    );
  }

  onSubmit() {
    this.coches.push(this.coche);
    this.coche = new Coche('', '', '');
  }
}
