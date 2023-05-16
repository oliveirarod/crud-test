import { CustomerTableService } from './../../services/customer-table.service';
import { Component, OnInit } from '@angular/core';
import { Customer, CustomerTableColumn } from 'src/app/models/Customer';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss'],
})
export class CustomerTableComponent implements OnInit {
  rows: Customer[] = [];
  displayedRows: Customer[];

  itemsPerPage: number = 7; // TODO: Criar campo para o usuário alterar o número de clientes por página
  currentPage: number = 1;

  sortColumn: string = 'createDate';
  sortDirection: 'asc' | 'desc' = 'desc';

  columns: CustomerTableColumn[] = [
    { prop: 'name', name: 'Nome', sort: true },
    { prop: 'document', name: 'CPF', sort: true },
    { prop: 'dateOfBirth', name: 'Data de Nascimento', sort: true },
    { prop: 'monthlyIncome', name: 'Renda Mensal', sort: true },
    { prop: 'email', name: 'E-mail', sort: true },
    { prop: 'createDate', name: 'Data de Cadastro', sort: true },
  ];

  constructor(private tableService: CustomerTableService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  sortTable(column: CustomerTableColumn): void {
    if (column.sort) {
      if (this.sortColumn === column.prop) {
        // Toggle sort direction if the same column is clicked
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        // Set the clicked column as the new sort column and reset sort direction
        this.sortColumn = column.prop;
        this.sortDirection = 'asc';
      }

      // Perform the actual sorting
      this.sortRows();
      this.updateDisplayedRows();
    }
  }

  sortRows(): void {
    this.rows.sort((a, b) => {
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

    this.displayedRows = this.rows.slice(startIndex, endIndex);
  }

  handlePageChange(page: number) {
    this.currentPage = page;
    this.updateDisplayedRows();
  }

  getCustomers() {
    this.tableService.getCustomers().subscribe((customers) => {
      this.rows = customers;

      const createDateColumn = this.columns.find(
        (column) => column.prop === 'createDate'
      );
      createDateColumn && this.sortTable(createDateColumn);

      this.handlePageChange(1);
    });
  }
}
