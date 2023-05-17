import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpfMaskPipe } from './cpf-mask.pipe';
import { CurrencyFormatPipe } from './currency-format.pipe';

@NgModule({
  declarations: [
    CpfMaskPipe,
    CurrencyFormatPipe
  ],
  imports: [CommonModule],
  exports: [
    CpfMaskPipe,
    CurrencyFormatPipe
  ],
})
export class PipesModule {}
