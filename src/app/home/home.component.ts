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

  constructor(
    private _ropaSrv: RopaService
  ) { }

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
