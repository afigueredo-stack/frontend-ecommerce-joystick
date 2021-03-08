import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private userData: User;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(usuario: string, senha: string) {

    return this.http.post<any>(`${environment.apiUrl}/auth`, { usuario, senha })
      .pipe(map(user => {
        this.userData = {
          id: user.data.id,
          username: user.data.usuario,
          name: user.data.nome,
          profile: user.data.perfil,
          company: user.data.empresa.nomeFantasia
        }
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(this.userData));
        this.currentUserSubject.next(this.userData);

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');

    this.currentUserSubject.next(null);
  }
}