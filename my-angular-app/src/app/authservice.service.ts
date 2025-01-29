import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { UserCredentials } from './UserCredentials';
import { response } from 'express';
import{Role} from './Role'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private apiUrl = 'api/v1/users';
  private apiUrl2 = 'api/v1/admin/dashboard/create/admin'
  token!:string|null;

  private tokenSubject = new BehaviorSubject<string | null>(this.getToken());
  token$ = this.tokenSubject.asObservable();
  constructor(private http: HttpClient) { }



  login(user:User): Observable<UserCredentials> {
     return this.http.post<UserCredentials>(`${this.apiUrl}/auth/login`,user);
  }
  register(user:any):Observable<any>{


    return this.http.post(`${this.apiUrl}/register`,user )
  }

  createAdmin(user:any):Observable<any>{
    const token=this.getToken()
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,  // Attach the JWT token to the request header
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.apiUrl2}`,user , {headers})
  }
  storeToken(token: string): void {
    localStorage.setItem('jwt_token', token);
    this.tokenSubject.next(token);
  }
  storeRole(role:Role):void{
    if(typeof window != "undefined")
    localStorage.setItem('role', role);
  }

  // Retrieve token from localStorage
  getToken(): string | null {
    if(typeof window != "undefined")
    this.token = localStorage.getItem('jwt_token');
      return this.token;
  }
  getToken1(): string | null {
    if(typeof window != "undefined")
      this.token = this.tokenSubject.getValue();
      return this.token;
  }
  getRole(): string | null {
    return localStorage.getItem('role');
  }

  // Remove token from localStorage
  removeToken(): void {
    localStorage.removeItem('jwt_token');
  }

  // Check if the user is authenticated (token exists in localStorage)
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

}
