import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/shared/models/Customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
})
export class CustomerEditComponent implements OnInit {
  isFormInvalid: boolean = true;

  constructor(
    private customersService: CustomersService,
    private router: Router
  ) {}
  
  // TODO: Carregar os dados do cliente selecionado
  ngOnInit(): void {}

  // TODO: Editar para que seja editado ao invés de criado um novo
  submitForm(newCustomer: Customer): void {
    this.customersService
      .createCustomer(newCustomer)
      .subscribe((createdCustomer: Customer) => {
        console.log('createdCustomer: ', createdCustomer);
        this.router.navigate(['customers']);
        // Handle success and navigation
      });
  }

  updateFormValidity(isInvalid: boolean): void {
    this.isFormInvalid = isInvalid;
  }
}
