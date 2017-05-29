import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [RopaService]
})
export class HomeComponent implements OnInit {
  public titulo = 'Página principal';

  constructor(
    private _ropaSrv: RopaService
  ) { }

  ngOnInit() {
    console.log(this._ropaSrv.prueba());
  }
}
