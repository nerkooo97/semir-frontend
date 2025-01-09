import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User.class';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  registerUser(user: User){
    const api = environment.serverUrl + '/user/register';
    return this.httpClient.post<string>(api, user);
  }
}
