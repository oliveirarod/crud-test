import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerEditComponent } from './customer-edit.component';
import { CustomerFormModule } from 'src/app/components/customer-form/customer-form.module';

@NgModule({
  declarations: [CustomerEditComponent],
  imports: [
    CommonModule,
    CustomerFormModule
  ],
})
export class CustomerEditModule {}
