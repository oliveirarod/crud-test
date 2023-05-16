import { Component, OnInit } from '@angular/core';

import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  // TODO: Trocar o tipo any
  customers: any[];

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    });
  }
}
