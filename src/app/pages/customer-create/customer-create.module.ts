import { NgxMaskModule } from "ngx-mask";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerCreateComponent } from './customer-create.component';

@NgModule({
  declarations: [CustomerCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
})
export class CustomerCreateModule {}
