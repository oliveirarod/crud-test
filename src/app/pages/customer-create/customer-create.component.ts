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

  showModal = false;
  successfullyCreated = true;
  deleteCustomerModalText: string;

  constructor(
    private customersService: CustomersService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submitForm(newCustomer: Customer): void {
    this.handleMonthlyIncomeProp(newCustomer);

    this.customersService
      .createCustomer(newCustomer)
      .subscribe((createdCustomer: Customer) => {
        this.deleteCustomerModalText = 'Cliente criado com sucesso!'
        this.successfullyCreated = true;
        this.showModal = true;
        // Handle success and navigation
      });
  }

  closeModal(): void {
    this.showModal = false;
  }

  goBackToCustomers() {
    if (this.successfullyCreated) {
      this.router.navigate(['customers']);
    }
  }

  handleMonthlyIncomeProp(customer: Customer) {
    customer.monthlyIncome = customer.monthlyIncome.replaceAll('.', ',');
  }
}
