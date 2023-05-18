import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from "ngx-mask";
import { CustomerFormComponent } from './customer-form.component';



@NgModule({
  declarations: [CustomerFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [CustomerFormComponent]
})
export class CustomerFormModule { }
