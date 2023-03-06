import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provincia } from '../models/provincia.interface';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  provincia: any | undefined;

  constructor(private http: HttpClient) { }

  getProvince(): Observable<Provincia[]> {
    return this.http.get<Provincia[]>('http://localhost:8080/province/');
  }

  deleteProvincia(id: number): Observable<Object> {
    return this.http.delete(`http://localhost:8080/province/${id}`);
  }

  addProvincia(provincia: any): Observable<Object> {
    return this.http.post('http://localhost:8080/province/', provincia);
  }

  updateProvincia(provincia: any): Observable<Object> {
    return this.http.put(`http://localhost:8080/province/${provincia.id}`, provincia);
  }
}
