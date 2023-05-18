import { Component, OnInit, ViewChild } from '@angular/core';

import { Customer } from 'src/app/shared/models/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { CustomerFormComponent } from 'src/app/components/customer-form/customer-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss'],
})
export class CustomerCreateComponent implements OnInit {
  @ViewChild(CustomerFormComponent)
  customerFormComponent!: CustomerFormComponent;

  isFormInvalid: boolean = true;

  constructor(
    private customersService: CustomersService,
    private router: Router
  ) {}

  ngOnInit(): void {}

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
