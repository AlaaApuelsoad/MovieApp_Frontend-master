import { Component } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { response } from 'express';
import { NgIf,NgFor,NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { title } from 'process';
@Component({
  selector: 'app-getmoviesfromexternalapi',
  standalone: true,
  imports: [FormsModule,HttpClientModule,ReactiveFormsModule,NgIf,NgFor,CommonModule,NgClass],
  templateUrl: './getmoviesfromexternalapi.component.html',
  styleUrl: './getmoviesfromexternalapi.component.css'
})
export class GetmoviesfromexternalapiComponent {

  movietitle=''
  constructor(private movieService: MovieServiceService,private router:Router) {}
  ngOnInit(): void {


  }
  loadMovies():void{


    console.log(this.movietitle)

     this.router.navigate(['loadmoviedashboard'], { queryParams: { title: this.movietitle } });

  }


}
