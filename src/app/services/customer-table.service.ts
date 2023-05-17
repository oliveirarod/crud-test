import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../shared/models/Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerTableService {
  private customersSubject = new BehaviorSubject<Customer[]>([]);
  private customers$: Observable<Customer[]> =
    this.customersSubject.asObservable();

  setCustomers(customers: Customer[]): void {
    this.customersSubject.next(customers);
  }

  getCustomers(): Observable<Customer[]> {
    return this.customers$;
  }
}
