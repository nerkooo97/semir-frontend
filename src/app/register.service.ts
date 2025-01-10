import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { User } from './models/User.class';
import { environment } from './environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  async registerUser(user: User): Promise<any> {
    const api = `${environment.serverUrl}/user/register`;
    console.log(api)
    return firstValueFrom(this.httpClient.post(api, user));
  }
}

