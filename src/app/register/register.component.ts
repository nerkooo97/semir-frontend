import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']

})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
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
    if (this.registrationForm.invalid) {
      alert('Please fill out all required fields correctly.');
      return;
    }

    console.log('Attempting to register user with the following details:', this.registrationForm.value);

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.registrationForm.value)
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      this.router.navigate(['/success']);
    } catch (error) {
      console.error('Registration failed. Error details:', error);
      alert('Registration failed. Please try again.');
    }
  }
}

}

