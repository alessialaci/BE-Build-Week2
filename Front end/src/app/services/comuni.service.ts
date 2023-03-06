import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comune } from '../models/comune.interface';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  constructor(private http: HttpClient) { }

  getComuni(): Observable<Comune[]> {
    return this.http.get<Comune[]>('http://localhost:8080/comuni/');
  }

  deleteComuni(id: number): Observable<Object> {
    return this.http.delete(`http://localhost:8080/comuni/${id}`);
  }

  addComuni(comune: any): Observable<Object> {
    return this.http.post('http://localhost:8080/comuni/', comune);
  }

  updateComuni(comune: any): Observable<Object> {
    return this.http.put(`http://localhost:8080/comuni/${comune.id}`, comune);
  }
}
