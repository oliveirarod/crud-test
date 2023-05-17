import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { CustomersModule } from './pages/customers/customes.module';
import { CustomerCreateModule } from './pages/customer-create/customer-create.module';
import { CustomerEditModule } from './pages/customer-edit/customer-edit.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarModule,
    CustomersModule,
    CustomerCreateModule,
    CustomerEditModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
