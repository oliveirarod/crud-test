import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTableComponent } from './customer-table.component';
import { Customer, CustomerTableColumn } from 'src/app/shared/models/Customer';

const mockRows: Customer[] = [
  {
    name: 'John',
    document: '123',
    dateOfBirth: '1990-01-01',
    monthlyIncome: 1000,
    email: 'john@example.com',
    createDate: '2022-01-01',
  },
  {
    name: 'Jane',
    document: '456',
    dateOfBirth: '1995-02-02',
    monthlyIncome: 2000,
    email: 'jane@example.com',
    createDate: '2021-01-01',
  },
];

const createDateColumn: CustomerTableColumn = {
  prop: 'createDate',
  name: 'Data de Cadastro',
  sort: true,
};

describe('CustomerTableComponent', () => {
  let component: CustomerTableComponent;
  let fixture: ComponentFixture<CustomerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort rows when input rows change', () => {
    component.columns.push(createDateColumn);
    component.rows = mockRows;
    fixture.detectChanges();

    expect(component.sortColumn).toBe('createDate');
    expect(component.sortDirection).toBe('asc');
    expect(component.rows[0].name).toBe('Jane');
    expect(component.rows[1].name).toBe('John');
  });

  it('should toggle sort direction when the same column is clicked', () => {
    component.columns.push(createDateColumn);
    component.rows = mockRows;
    fixture.detectChanges();

    // Sort in ascending order
    component.sortTable(createDateColumn);
    fixture.detectChanges();

    expect(component.sortDirection).toBe('asc');
    expect(component.rows[0].name).toBe('Jane');
    expect(component.rows[1].name).toBe('John');

    // Toggle sort direction
    component.sortTable(createDateColumn);
    fixture.detectChanges();

    expect(component.sortDirection).toBe('desc');
    expect(component.rows[0].name).toBe('John');
    expect(component.rows[1].name).toBe('Jane');
  });

  it('should set the clicked column as the new sort column and reset sort direction', () => {
    const nameColumn: CustomerTableColumn = {
      prop: 'name',
      name: 'Nome',
      sort: true,
    };

    component.columns.push(nameColumn);
    component.rows = mockRows;
    fixture.detectChanges();

    // Sort in ascending order
    component.sortTable(nameColumn);
    fixture.detectChanges();

    expect(component.sortColumn).toBe('name');
    expect(component.sortDirection).toBe('asc');
    expect(component.rows[0].name).toBe('Jane');
    expect(component.rows[1].name).toBe('John');

    // Set the clicked column as the new sort column and reset sort direction
    component.sortTable(nameColumn);
    fixture.detectChanges();

    expect(component.sortColumn).toBe('name');
    expect(component.sortDirection).toBe('asc');
    expect(component.rows[0].name).toBe('John');
    expect(component.rows[1].name).toBe('Jane');
  });
});
