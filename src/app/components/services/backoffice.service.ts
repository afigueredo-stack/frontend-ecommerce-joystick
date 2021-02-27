import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  email: string,
  senha: string
}

/* URL Dev */
//const urlBase = 'http://localhost:8080';
/* URL Prod */
const urlBase = 'https://joystickapi.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class BackofficeService {

  constructor(private http: HttpClient) { }

  logIn(user: User) {
    return this.http.post<User>(`${urlBase}/auth`, user);
  }
}
