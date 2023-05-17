import { CustomerTableService } from './../../services/customer-table.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/shared/models/Customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  itemsPerPage: number = 6;
  itemsPerPageControl = new FormControl(this.itemsPerPage);

  CustomerFilter: string = '';

  constructor(
    private customersService: CustomersService,
    private tableService: CustomerTableService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.handleCustomers();
    this.handleItemsPerPage();
  }

  handleCustomers() {
    this.customersService.getCustomers().subscribe((customers: Customer[]) => {
      this.tableService.setCustomers(customers);
    });
  }

  handleItemsPerPage() {
    this.itemsPerPageControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.itemsPerPage = value;
      });
  }

  handleCustomerFilter(search: HTMLInputElement) {
    this.CustomerFilter = search.value;
  }

  navigateToCreateCustomer(): void {
    this.router.navigate(['customers', 'create']);
  }
}
