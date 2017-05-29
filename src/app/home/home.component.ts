import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [RopaService]
})
export class HomeComponent implements OnInit {
  public titulo = 'Página principal';

  public listadoRopa: Array<string>;
  public nuevaPrenda: string;

  public fecha;
  public nombre = 'JesúS góMeZ belLido';

  constructor(
    private _ropaSrv: RopaService
  ) {
    this.fecha = new Date(2017, 4, 25);
  }

  ngOnInit() {
    this.listadoRopa = this._ropaSrv.getRopa();
    console.log(this.listadoRopa);
  }

  guardarPrenda() {
    this._ropaSrv.addRopa(this.nuevaPrenda);
    this.nuevaPrenda = '';
  }

  removePrenda(index: number) {
    this._ropaSrv.removeRopa(index);
  }
}
