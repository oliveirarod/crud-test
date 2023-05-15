import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsComponent } from './pages/clients/clients.component';
import { ClientCreateComponent } from './pages/client-create/client-create.component';
import { ClientEditComponent } from './pages/client-edit/client-edit.component';

export const ROUTE_PATHS = {
  CLIENTS: 'clients',
  CLIENT_CREATE: 'client-create',
  CLIENT_EDIT: 'client-edit',
};

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTE_PATHS.CLIENTS,
    pathMatch: 'full',
  },
  {
    path: ROUTE_PATHS.CLIENTS,
    component: ClientsComponent,
  },
  {
    path: ROUTE_PATHS.CLIENT_CREATE,
    component: ClientCreateComponent,
  },
  {
    path: `${ROUTE_PATHS.CLIENT_EDIT}/:id`,
    component: ClientEditComponent,
  },
  {
    path: '**',
    redirectTo: ROUTE_PATHS.CLIENTS,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
