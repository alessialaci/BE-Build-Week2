import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fattura } from '../models/fattura.interface';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor(private http: HttpClient) { }

  getFatture(): Observable<Fattura[]> {
    return this.http.get<Fattura[]>('http://localhost:8080/fatture/');
  }

  deleteFatture(id: number): Observable<Object> {
    return this.http.delete(`http://localhost:8080/fatture/${id}`);
  }

  addFatture(fattura: any): Observable<Object> {
    return this.http.post('http://localhost:8080/fatture/', fattura);
  }

  updateFatture(fattura: any, id: number): Observable<Object> {
    return this.http.put(`http://localhost:8080/fatture/${id}`, fattura);
  }

}
