import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerTableComponent } from './customer-table.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    CustomerTableComponent,
    PaginationComponent
  ],
  imports: [CommonModule],
  exports: [CustomerTableComponent],
})
export class CustomerTableModule {}
