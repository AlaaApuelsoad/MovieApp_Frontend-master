import { Component,OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { response } from 'express';
import { NgIf,NgFor,NgClass } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Injectable,Inject } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-movie-dashboard',
  standalone: true,
  imports: [FormsModule,HttpClientModule,ReactiveFormsModule,NgIf,NgFor,CommonModule,NgClass],
  templateUrl: './movie-dashboard.component.html',
  styleUrl: './movie-dashboard.component.css'
})
export class MovieDashboardComponent {
  movies: any[] = [];


  page:number = 0;
  size:number = 2;
  totalPages:number = 0;
  totalElements:number = 0;
  constructor(private movieService: MovieServiceService,@Inject(PLATFORM_ID) private platformId: Object,private auth:AuthserviceService,private router:Router) {}

  ngOnInit(): void {

    this.loadMovies();
  }
  loadMovies():void{
    let headers = new HttpHeaders();
       if (isPlatformBrowser(this.platformId)) {
        const tokenstr = 'Bearer ' + window.localStorage.getItem('jwt_token');
        if (tokenstr) {
          headers = headers.set('Authorization', tokenstr);
        }
      }
    this.movieService.getpaginatedmovies(this.page,this.size).subscribe(

      (res: any) => {

        this.movies = res.content;
        this.totalPages = res.totalPages; // Total pages
        this.totalElements = res.totalElements;

      },
      (error) => {
        const token1=this.auth.getToken1();
      }
    );
  }

  rateMovie(movie: any, rating: number): void {
    movie.memberRating = rating; // Update the MemberRating property
    console.log(`Rated movie ${movie.imdbID} with ${rating} stars`);

    // Call addrating to persist the rating
    this.movieService.addrating(movie.imdbID, rating).subscribe({
      next: (response) => {
        alert("Your rating has been added successfully!");
      },
      error: (err) => {
        alert("Failed to submit rating.");
      },
    });
  }



 moviedetail(id:number):void{
  this.router.navigate(['/moviedetail',id]);
 }
 nextPage() {
  console.log(2)
  if (this.page < this.totalPages - 1) {
    this.page++;
    this.loadMovies();

  }

}

previousPage() {
  console.log("h");
  if (this.page > 0) {
    this.page--;
    this.loadMovies();
    console.log(this.page)
  }
}
}
