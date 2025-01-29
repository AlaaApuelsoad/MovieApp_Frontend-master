import { Component } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { response } from 'express';
import { NgIf,NgFor,NgClass } from '@angular/common';
import { ActivatedRoute ,Router} from '@angular/router'
import { movie } from '../movie';
@Component({
  selector: 'app-loadmovies',
  standalone: true,
  imports: [FormsModule,HttpClientModule,ReactiveFormsModule,NgIf,NgFor,CommonModule,NgClass],
  templateUrl: './loadmovies.component.html',
  styleUrl: './loadmovies.component.css'
})
export class LoadmoviesComponent {
movies: any[] = [];
title!:any;
  page:number = 1;
  size:number = 2;
  totalPages:number = 0;
  totalElements:number = 0;
  newMovie = {
    id:7,
    title: '',
    genre: '',
    year: '',
    description:'',
    poster:'',
    director:'',
  };

  constructor(private movieService: MovieServiceService,private router:ActivatedRoute,private route:Router) {}

  ngOnInit(): void {

    this.router.queryParams.subscribe(params => {
      this.title = params['title']; // 'title' is the query parameter key
    });
    this.loadMovies();
  }
  loadMovies():void{
    this.movieService.getpaginatedmoviesfromomdb(this.page,this.size,this.title).subscribe(

      (res: any) => {
        console.log(this.title)
        console.log(this.size)
        this.totalPages = res.totalPages; // Total pages
        this.totalElements = res.totalElements;
        this.movies = res.search;
        this.totalPages = Math.ceil(res.totalMovies/10); // Total pages
        this.totalElements = res.totalMovies;
      },
      (error) => {

        console.error('Error fetching movies from omdb api:', error);
      }
    );
  }
  nextPage() {
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
  redirect(){
    this.route.navigate(['/deletemoviedashboard']);
  }

  addToDb(id:string) {
    this.movieService.addMovie(id).subscribe({
      next:(res)=>{
        console.log(res);
        alert("movie added successfully!");
      },
      error:(err)=>{
        console.log(err);
        alert("something wrong, please try again!");
      }
    })
  }
}
