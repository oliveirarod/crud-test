import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private baseUrl = 'http://localhost:3000/clients';

  constructor(private http: HttpClient) {}

  createClient(client: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/clients`, client);
  }

  getClients(): Observable<any> {
    return this.http.get(`${this.baseUrl}/clients`);
  }

  getClient(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/clients/${id}`);
  }

  update(id: string, client: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/clients/${id}`, client);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/clients/${id}`);
  }
}
