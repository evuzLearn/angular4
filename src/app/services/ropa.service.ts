import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
  public nombrePrenda = 'Pantalones vaqueros';
  public coleccionRopa = [
    'Pantalos blancos',
    'Camiseta roja'
  ];

  prueba() {
    return this.nombrePrenda;
  }

  addRopa(nombrePrenda: string): Array<string> {
    this.coleccionRopa.push(nombrePrenda);
    return this.getRopa();
  }

  getRopa(): Array<string> {
    return this.coleccionRopa;
  }

  removeRopa(index: number) {
    this.coleccionRopa.splice(index, 1);
  }
}
