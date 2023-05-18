import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/shared/models/Customer';
import { FormControlEditValue } from 'src/app/shared/models/FormControlConfig';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
})
export class CustomerEditComponent implements OnInit {
  customerProps: FormControlEditValue[];
  customerId: string;

  showModal = false;
  successfullyCreated = true;
  deleteCustomerModalText: string;

  constructor(
    private route: ActivatedRoute,
    private customersService: CustomersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.handleSelectedCustomer();
  }

  submitForm(updatedCustomer: Customer): void {
    this.handleMonthlyIncomeProp(updatedCustomer);

    console.log(updatedCustomer.monthlyIncome);
    this.customersService
      .updateCustomer(this.customerId, updatedCustomer)
      .subscribe((customer: Customer) => {
        this.deleteCustomerModalText = 'Cliente editado com sucesso!';
        this.successfullyCreated = true;
        this.showModal = true;
      });
  }

  handleSelectedCustomer() {
    this.route.params.subscribe((params) => {
      this.customerId = params['id'];
      this.customersService
        .getCustomerById(this.customerId)
        .subscribe((customer: Customer | undefined) => {
          if (!customer) {
            this.router.navigate(['customers']);
            return;
          }

          this.customerProps = [
            { name: 'name', value: customer.name },
            { name: 'document', value: customer.document, disabled: true },
            { name: 'dateOfBirth', value: customer.dateOfBirth },
            { name: 'monthlyIncome', value: customer.monthlyIncome },
            { name: 'email', value: customer.email },
            { name: 'createDate', value: customer.createDate },
          ];
        });
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
