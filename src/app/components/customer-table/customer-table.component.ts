import { CustomerTableService } from './../../services/customer-table.service';
import {
  Component,
  OnChanges,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';
import { Customer, CustomerTableColumn } from 'src/app/models/Customer';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss'],
})
export class CustomerTableComponent implements OnChanges, OnInit {
  @Input() itemsPerPage: number = 6;
  @Input() search: string;

  // TODO: Inconsistência ao alterar o itemsPerPage enquanto o search está com a pesquisa 'o'
  rows: Customer[] = [];
  displayedRows: Customer[];
  currentPage: number = 1;

  sortColumn: string = 'createDate';
  sortDirection: 'asc' | 'desc' = 'desc';

  columns: CustomerTableColumn[] = [
    { prop: 'name', name: 'Nome', sort: true },
    { prop: 'document', name: 'CPF', sort: true },
    { prop: 'createDate', name: 'Data de Cadastro', sort: true },
    { prop: 'monthlyIncome', name: 'Renda Mensal', sort: true },
  ];

  constructor(private tableService: CustomerTableService) {}

  ngOnInit(): void {
    this.handleCustomers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.itemsPerPage?.currentValue) {
      this.itemsPerPage = changes.itemsPerPage.currentValue;
      this.filterDisplayedRows();
    }

    if (changes.search?.currentValue || changes.search?.currentValue === '') {
      this.search = changes.search.currentValue;
      this.filterDisplayedRows();
    }
  }

  sortTable(column: CustomerTableColumn): void {
    if (column.sort) {
      if (this.sortColumn === column.prop) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column.prop;
        this.sortDirection = 'asc';
      }

      this.sortRows();
      this.filterDisplayedRows();
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

  filterDisplayedRows(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.displayedRows = this.getFilteredRows().slice(startIndex, endIndex);
  }

  getFilteredRows(): Customer[] {
    if (this.search) {
      const searchValue = this.search.toLowerCase();

      return this.rows.filter(
        (row) =>
          row.name.toLowerCase().includes(searchValue) ||
          row.document.toLowerCase().includes(searchValue) ||
          row.createDate.toLowerCase().includes(searchValue)
      );
    } else {
      return this.rows;
    }
  }

  handlePageChange(page: number) {
    this.currentPage = page;
    this.filterDisplayedRows();
  }

  handleCustomers() {
    this.tableService.getCustomers().subscribe((customers) => {
      this.rows = customers;

      const createDateColumn = this.columns.find(
        (column) => column.prop === 'createDate'
      );
      createDateColumn && this.sortTable(createDateColumn);

      this.filterDisplayedRows();
    });
  }
}
