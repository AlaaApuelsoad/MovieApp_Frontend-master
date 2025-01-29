import { Component } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { response } from 'express';
import { NgIf,NgFor,NgClass } from '@angular/common';
import { Router } from '@angular/router'
@Component({
  selector: 'app-deletemovie',
  standalone: true,
  imports: [FormsModule,HttpClientModule,ReactiveFormsModule,NgIf,NgFor,CommonModule,NgClass],
  templateUrl: './deletemovie.component.html',
  styleUrl: './deletemovie.component.css'
})
export class DeletemovieComponent {
 movies: any[] = [];


  page:number = 0;
  size:number = 2;
  totalPages:number = 0;
  totalElements:number = 0;

  constructor(private movieService: MovieServiceService,private router:Router) {}

  ngOnInit(): void {

    this.loadMovies();
  }
  loadMovies():void{

    this.movieService.getpaginatedmovies(this.page,this.size).subscribe(

      (res: any) => {

        this.movies = res.content;
        this.totalPages = res.totalPages; // Total pages
        this.totalElements = res.totalElements;
      },
      (error) => {

        console.error('Error fetching movies:', error);
      }
    );
  }

  loadmovie():void{
    this.router.navigate(['/loadmovies']);

  }
  createAdmin():void{
    this.router.navigate(['/createadmin']);

  }
  deletemovie(id:number):void{
    this.movieService.deleteMovie(id).subscribe(
      (res: any) => {
        alert("movie deleted successfully!")
        window.location.reload();
        this.router.navigate(['/deletemoviedashboard']);
      },
      (error) => {
        console.error('Error deleting movie:', error);
      }

    );
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
