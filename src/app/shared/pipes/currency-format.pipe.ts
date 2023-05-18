import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: string | number): string {
    if (typeof value !== 'number') {
      value = parseFloat(value.toString().replace(',', '.'));
    }

    if (isNaN(value)) return '';

    const formattedValue = value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return `R$ ${formattedValue}`;
  }
}
