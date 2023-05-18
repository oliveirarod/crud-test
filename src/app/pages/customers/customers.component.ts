import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.handleItemsPerPage();
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
