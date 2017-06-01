import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PeticionesService {
  public url: string;

  constructor(private _http: Http) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }

  getArticulos() {
    return this._http.get(this.url)
      .map(res => res.json());
  }

  getPrueba() {
    return 'Hola mundo desde el service';
  }
}
