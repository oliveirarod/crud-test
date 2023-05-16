import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { CustomerTableModule } from 'src/app/components/customer-table/customer-table.module';
import { CustomerTableService } from 'src/app/services/customer-table.service';

@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    ButtonModule,
    CustomerTableModule,
  ],
  providers: [CustomerTableService]
})
export class CustomersModule {}
