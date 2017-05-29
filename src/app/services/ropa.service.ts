import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
  public nombrePrenda = 'Pantalones vaqueros';

  prueba() {
    return this.nombrePrenda;
  }
}
