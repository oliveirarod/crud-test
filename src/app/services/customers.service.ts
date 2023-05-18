import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { v4 as uuidv4 } from 'uuid';
import { Customer } from '../shared/models/Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private baseUrl = 'http://localhost:3000/customers';

  private customersSubject = new BehaviorSubject<Customer[]>([]);
  private customers$: Observable<Customer[]> =
    this.customersSubject.asObservable();

  constructor(private http: HttpClient) {}

  createCustomer(customer: Customer): Observable<Customer> {
    const id = uuidv4();
    const customerWithId = { ...customer, id };

    return this.http.post<Customer>(`${this.baseUrl}`, customerWithId);
  }

  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(`${this.baseUrl}/${id}`, customer);
  }

  deleteCustomer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}`).pipe(
      map((customers: Customer[]) => {
        this.customersSubject.next(customers);
        return customers;
      })
    );
  }

  getCustomerById(id: string): Observable<Customer | undefined> {
    return this.customers$.pipe(
      map((customers: Customer[]) =>
        customers.find((customer) => customer.id === id)
      )
    );
  }
}
