import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Indirizzo } from '../models/indirizzo.interface';


@Injectable({
  providedIn: 'root'
})
export class IndirizziService {

  constructor(private http: HttpClient) { }

  getIndirizzi(): Observable<Indirizzo[]> {
    return this.http.get<Indirizzo[]>('http://localhost:8080/indirizzi/');
  }

  deleteIndirizzi(id: number): Observable<Object> {
    return this.http.delete(`http://localhost:8080/indirizzi/${id}`);
  }

  addIndirizzi(indirizzo: any): Observable<Object> {
    return this.http.post('http://localhost:8080/indirizzi/', indirizzo);
  }

  updateIndirizzi(indirizzo: any): Observable<Object> {
    return this.http.put(`http://localhost:8080/indirizzi/${indirizzo.id}`, indirizzo);
  }
}
