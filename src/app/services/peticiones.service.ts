import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PeticionesService {
  constructor(private http: Http) { }

  getPrueba() {
    return 'Hola mundo desde el service';
  }
}
