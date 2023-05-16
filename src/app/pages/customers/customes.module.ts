import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
})
export class CustomersModule {}
