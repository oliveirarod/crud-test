import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerCreateComponent } from './customer-create.component';
import { CustomerFormModule } from 'src/app/components/customer-form/customer-form.module';
import { ModalModule } from 'src/app/components/feedback-modal/feedback-modal.module';

@NgModule({
  declarations: [CustomerCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerFormModule,
    ModalModule,
    NgxMaskModule.forRoot(),
  ],
})
export class CustomerCreateModule {}
