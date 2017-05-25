import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent implements OnInit {
  public titulo = 'Página de contacto de la web';
  public page;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.page = params.page;
    });
  }

  redirigir() {
    this._router.navigate(['/contacto', 'Hola!']);
  }
}
