import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/utenti');
  }

  deleteUser(id: number): Observable<Object> {
    return this.http.delete(`http://localhost:8080/utenti/${id}`);
  }

  addUser(user: any): Observable<Object> {
    return this.http.post('http://localhost:8080/utenti', user);
  }

  updateUser(user: any): Observable<Object> {
    return this.http.put(`http://localhost:8080/utenti/${user.id}`, user);
  }
}
