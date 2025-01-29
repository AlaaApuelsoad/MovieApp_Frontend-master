import { Component,OnInit } from '@angular/core';
import { Injectable,Inject } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
//import { response } from 'express';
import { NgIf,NgFor,NgClass } from '@angular/common';
import { MovieServiceService } from '../movie-service.service';
@Component({
  selector: 'app-moviedetail',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,NgIf,NgFor,CommonModule,NgClass,HttpClientModule],
  templateUrl: './moviedetail.component.html',
  styleUrl: './moviedetail.component.css'
})
export class MoviedetailComponent implements OnInit{
   movie:any;
   movieId!:any
   constructor(private movieservice: MovieServiceService,private router:ActivatedRoute,private route:Router){}
   ngOnInit():void{
    this.movieId=this.router.snapshot.paramMap.get('id')!;
    this.fetchMovieDetails();
   }
   fetchMovieDetails():void{
    this.movieservice.getmovie(this.movieId).subscribe(
      (res: any) => {
        this.movie = res;

      },
      (error) => {
        console.error('Error fetching movies:', error);
      }

    );
  }
  redirect():void{

    this.route.navigate(['/moviedashboard']);
  }

}
