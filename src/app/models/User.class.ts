import { Injectable } from "@angular/core";
import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    username: string;
    emailAddress: string;
    password: string;
    country: string;
    image: string;
    role: string;
}
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  group(_arg0: {}): any {
    throw new Error('Method not implemented.');
  }
  getData() {
    throw new Error('Method not implemented.');
  }
  registerUser(user: User) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

