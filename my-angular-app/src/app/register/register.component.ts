import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // User object to store registration data
  user = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  };

  isLoading = false; // To track loading state

  constructor(private router: Router, private userService: AuthserviceService) {}

  onRegister() {
    this.isLoading = true; // Show spinner when request starts

    this.userService.register(this.user).subscribe({
      next: (res) => {
        this.isLoading = false; // Hide spinner when response is received
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.isLoading = false; // Hide spinner if there's an error
        if (err.error.password) {
          alert(err.error.password);
        } else {
          alert('Email already exists!');
        }
      }
    });
  }
}
