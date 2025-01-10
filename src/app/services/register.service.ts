import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User.class';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  registerUser(user: User){
    const api = 'http://localhost:3000/api/register';
    return this.httpClient.post<string>(api, user);
  }
}
