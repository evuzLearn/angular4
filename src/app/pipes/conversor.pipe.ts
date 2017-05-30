import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversor' })
export class ConversorPipe implements PipeTransform {
  transform(value: number, multiplicador: number): string {
    return `La multiplicación: ${value} x ${multiplicador} = ${value * multiplicador}`;
  }
}
