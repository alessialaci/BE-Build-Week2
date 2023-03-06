import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  constructor(private http: HttpClient) { }

  getClienti(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8080/clienti');
  }

  deleteClienti(id: number): Observable<Object> {
    return this.http.delete(`http://localhost:8080/clienti/${id}`);
  }

  addClienti(cliente: any): Observable<Object> {
    return this.http.post('http://localhost:8080/clienti', cliente);
  }

  updateClienti(cliente: any): Observable<Object> {
    return this.http.put(`http://localhost:8080/clienti/${cliente.id}`, cliente);
  }
}
