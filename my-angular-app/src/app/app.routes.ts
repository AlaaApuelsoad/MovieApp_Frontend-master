import { Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';

import { CreatemovieComponent } from './createmovie/createmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { LoadmoviesComponent } from './loadmovies/loadmovies.component';
import { BrowserModule} from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { GetmoviesfromexternalapiComponent } from './getmoviesfromexternalapi/getmoviesfromexternalapi.component';
import {RegisterComponent} from "./register/register.component";
import {CreateadminComponent} from "./createadmin/createadmin.component";
export const routes: Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },{path:'register', component:RegisterComponent},{path:'moviedashboard',component:MovieDashboardComponent},{path:'createmoviedashboard',component:CreatemovieComponent},{path:'deletemoviedashboard',component:DeletemovieComponent},{path:'loadmoviedashboard',component:LoadmoviesComponent},{path:'moviedetail/:id',component:MoviedetailComponent},{path:'loadmovies',component:GetmoviesfromexternalapiComponent} , {path: "createadmin" , component:CreateadminComponent}];
   @NgModule({
        imports: [RouterModule.forRoot(routes),HttpClientModule,BrowserModule],
        exports: [RouterModule]
      })
      export class AppRoutingModule { }
