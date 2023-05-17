import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: string | number): string {
    if (typeof value !== 'number') {
      value = parseFloat(value);
    }

    if (isNaN(value)) {
      return '';
    }

    const formattedValue = value.toFixed(2).replace('.', ',');
    return `R$ ${formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  }
}
