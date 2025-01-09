import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User.class';
import { RegisterService } from '../models/User.class';
import { Validator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private registerService:RegisterService) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }



  async onSubmit(): Promise<void> {
    if (this.registrationForm.valid) {
      try {
        const response = await this.registerService.registerUser(this.registrationForm.value);
        console.log('User registered successfully!', response);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
}



