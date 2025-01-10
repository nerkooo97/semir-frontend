import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
    console.log('Attempting to log in user with the following details:', this.loginForm.value);

    try {
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.loginForm.value)
      });

      if (!response.ok) {
        throw new Error('Failed to log in user');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      this.router.navigate(['/']);
    } catch (error) {
      console.error('Login failed. Error details:', error);
      alert('Login failed. Please try again.');
    }
  }
}
