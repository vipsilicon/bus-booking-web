import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl = 'http://localhost:8081/auth';

  login(data: { email: string, password: string}): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  signUp(data: { email: string, password: string, confirmPassword: string}): Observable<any>{
    return this.http.post(`${this.apiUrl}/signup`, data);
  }

  logout(token: string): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/logout`, {}, {headers, observe: 'response'});
  }
}
