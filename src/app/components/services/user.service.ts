import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { AuthenticationService } from './authentication.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getUser() {
    return this.authenticationService.currentUser;
  }
}