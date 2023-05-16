import { CustomerTableService } from './../../services/customer-table.service';
import { Component, OnInit } from '@angular/core';

import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  constructor(
    private customersService: CustomersService,
    private tableService: CustomerTableService
  ) {}

  ngOnInit(): void {
    this.handleCustomers();
  }

  handleCustomers() {
    this.customersService.getCustomers().subscribe((customers) => {
      this.tableService.setCustomers(customers);
    });
  }
}
