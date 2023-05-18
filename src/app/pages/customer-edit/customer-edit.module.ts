import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerEditComponent } from './customer-edit.component';
import { CustomerFormModule } from 'src/app/components/customer-form/customer-form.module';
import { ModalModule } from 'src/app/components/feedback-modal/feedback-modal.module';

@NgModule({
  declarations: [CustomerEditComponent],
  imports: [
    CommonModule,
    CustomerFormModule,
    ModalModule
  ],
})
export class CustomerEditModule {}
