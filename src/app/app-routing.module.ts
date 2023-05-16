import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerCreateComponent } from './pages/customer-create/customer-create.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';

export const ROUTE_PATHS = {
  CUSTOMERS: 'customers',
  CUSTOMER_CREATE: 'customer-create',
  CUSTOMER_EDIT: 'customer-edit',
};

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTE_PATHS.CUSTOMERS,
    pathMatch: 'full',
  },
  {
    path: ROUTE_PATHS.CUSTOMERS,
    component: CustomersComponent,
  },
  {
    path: ROUTE_PATHS.CUSTOMER_CREATE,
    component: CustomerCreateComponent,
  },
  {
    path: `${ROUTE_PATHS.CUSTOMER_EDIT}/:id`,
    component: CustomerEditComponent,
  },
  {
    path: '**',
    redirectTo: ROUTE_PATHS.CUSTOMERS,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
