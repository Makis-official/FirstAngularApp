import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plusFive'
})
export class PlusFivePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return Number(`${value}`)+5;
  }

}
