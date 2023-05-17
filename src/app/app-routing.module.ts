import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerCreateComponent } from './pages/customer-create/customer-create.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';

const baseUrl = 'customers';

const routes: Routes = [
  {
    path: '',
    redirectTo: baseUrl,
    pathMatch: 'full',
  },
  {
    path: baseUrl,
    component: CustomersComponent,
    data: { title: 'Clientes' }
  },
  {
    path: `${baseUrl}/create`,
    component: CustomerCreateComponent,
    data: { title: 'Adicionar Cliente' }
  },
  {
    path: `${baseUrl}/:id`,
    component: CustomerEditComponent,
    data: { title: 'Editar Cliente' }
  },
  {
    path: '**',
    redirectTo: baseUrl,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
