import {
  Component,
  OnChanges,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';

import { Customer, CustomerTableColumn } from 'src/app/shared/models/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss'],
})
export class CustomerTableComponent implements OnChanges, OnInit {
  @Input() itemsPerPage = 6;
  @Input() search: string;

  customers: Customer[] = [];
  displayedCustomers: Customer[] = [];
  currentPage = 1;

  sortColumn = 'createDate';
  sortDirection: 'asc' | 'desc' = 'desc';

  showModal = false;
  deleteCustomerModalText: string;
  customerIdToDelete: string;

  columns: CustomerTableColumn[] = [
    { prop: 'name', name: 'Nome', sort: true },
    { prop: 'document', name: 'CPF', sort: true },
    { prop: 'createDate', name: 'Data de Cadastro', sort: true },
    { prop: 'monthlyIncome', name: 'Renda Mensal', sort: true },
  ];

  constructor(
    private customersService: CustomersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.handleCustomers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.itemsPerPage?.currentValue) {
      this.itemsPerPage = changes.itemsPerPage.currentValue;
      this.updateDisplayedRows();
    }

    if (changes.search?.currentValue || changes.search?.currentValue === '') {
      this.search = changes.search.currentValue;
      this.updateDisplayedRows();
    }
  }

  sortTable(column: CustomerTableColumn): void {
    if (!column.sort) return;

    if (this.sortColumn === column.prop) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column.prop;
      this.sortDirection = 'asc';
    }

    this.sortRows();
    this.updateDisplayedRows();
  }

  sortRows(): void {
    this.customers.sort((a, b) => {
      const valA = a[this.sortColumn];
      const valB = b[this.sortColumn];

      if (typeof valA === 'string' && typeof valB === 'string') {
        return this.sortDirection === 'asc'
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      } else {
        return this.sortDirection === 'asc' ? valA - valB : valB - valA;
      }
    });
  }

  updateDisplayedRows(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.displayedCustomers = this.getFilteredRows().slice(
      startIndex,
      endIndex
    );
  }

  getFilteredRows(): Customer[] {
    if (this.search) {
      const searchValue = this.search.toLowerCase();

      return this.customers.filter(
        (row) =>
          row.name.toLowerCase().includes(searchValue) ||
          row.document.toLowerCase().includes(searchValue) ||
          row.createDate.toLowerCase().includes(searchValue)
      );
    } else {
      return this.customers;
    }
  }

  handlePageChange(page: number) {
    this.currentPage = page;
    this.updateDisplayedRows();
  }

  handleCustomers() {
    this.customersService.getCustomers().subscribe((customers) => {
      this.customers = customers;

      const createDateColumn = this.columns.find(
        (column) => column.prop === 'createDate'
      );
      createDateColumn && this.sortTable(createDateColumn);

      this.updateDisplayedRows();
    });
  }

  goToCustomerEdit(customerId: string) {
    this.router.navigate(['customers', customerId]);
  }

  openModal(customer: Customer): void {
    this.showModal = true;
    this.deleteCustomerModalText = `Tem certeza que deseja excluir o(a) cliente ${customer.name}?`;
    this.customerIdToDelete = customer.id;
  }

  closeModal(): void {
    this.showModal = false;
  }

  deleteCustomer() {
    if (!this.customerIdToDelete) return;
    this.customersService
      .deleteCustomer(this.customerIdToDelete)
      .subscribe(() => {
        this.closeModal();
        this.customers = this.customers.filter(
          (customer) => customer.id !== this.customerIdToDelete
        );
        this.updateDisplayedRows();
      });
  }
}
