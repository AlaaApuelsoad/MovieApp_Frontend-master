import { Component } from '@angular/core';
import { AuthserviceService } from "../authservice.service";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-createadmin',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.css']
})
export class CreateadminComponent {

  // User object to store registration data
  user = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  };

  loading = false; // Loading state

  constructor(private router: Router, private userService: AuthserviceService) {}

  onRegister() {
    let token = localStorage.getItem("jwt_token");
    this.loading = true; // Set loading to true when the request starts

    this.userService.createAdmin(this.user).subscribe({
      next: (res) => {
        this.loading = false; // Set loading to false when the request succeeds
        setTimeout(() => {
          alert("Admin is created Successfully!");
        }, 2000);

        this.router.navigate(['/deletemoviedashboard']);

      },
      error: (err) => {
        this.loading = false; // Set loading to false when the request fails
        if (err.error.password) {
          alert(err.error.password);
        } else {
          alert("Email already exists!");
        }
      }
    });
  }
}
