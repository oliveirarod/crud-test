import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerTableComponent } from './customer-table.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [
    CustomerTableComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [CustomerTableComponent],
})
export class CustomerTableModule {}
