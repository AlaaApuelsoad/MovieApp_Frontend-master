import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    id: 0,
    usernameOrEmail: '',
    password: '',
  };

  isLoading = false; // Spinner flag

  constructor(private router: Router, private authService: AuthserviceService) {}

  onSubmit() {
    this.isLoading = true; // Show spinner
    this.authService.login(this.user).subscribe(
      (response) => {
        this.isLoading = false; // Hide spinner
        this.authService.storeToken(response.token);
        this.authService.storeRole(response.role);
        console.log(response.role);
        console.log(response.token);
        if (response.role === 'ADMIN') {
          this.router.navigate(['deletemoviedashboard']);
        }
        if (response.role === 'MEMBER') {
          this.router.navigate(['/moviedashboard']);
        }
      },
      (error) => {
        this.isLoading = false; // Hide spinner
        console.error('Login failed', error);
        alert('Invalid credentials');
      }
    );
  }
}
