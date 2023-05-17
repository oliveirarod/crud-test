import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfMask'
})
export class CpfMaskPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const formattedValue = value.replace(/\D/g, '');
    const part1 = formattedValue.substr(0, 3);
    const part2 = formattedValue.substr(3, 3);
    const part3 = formattedValue.substr(6, 3);
    const part4 = formattedValue.substr(9, 2);

    return `${part1}.${part2}.${part3}-${part4}`;
  }
}
