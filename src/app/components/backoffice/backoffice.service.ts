import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  email: string,
  senha: string
}

const urlBase = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class BackofficesService {

  constructor(private http: HttpClient) { }

  logIn(user: User) {
    return this.http.post<User>(`${urlBase}/auth`, user);
  }
}
