import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private baseUrl = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) {}

  // TODO: Trocar o tipo any dos métodos
  createCustomer(customer: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, customer);
  }

  getCustomers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCustomer(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  update(id: string, customer: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, customer);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
