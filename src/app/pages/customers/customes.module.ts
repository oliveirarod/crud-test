import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomersComponent } from './customers.component';
import { CustomerTableModule } from 'src/app/components/customer-table/customer-table.module';
import { CustomerTableService } from 'src/app/services/customer-table.service';

@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    CustomerTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomerTableService]
})
export class CustomersModule {}
