import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  IsLoggedIn() {
    throw new Error('Method not implemented.');
  }
//   private baseUrl = "http://localhost:9091/ims/"; // Replace with your actual API base URL

//   constructor(private http: HttpClient) {}

//   login(username: string, password: string): Observable<any> {
//     const body = {
//       userName: username,
//       password: password
//     };

//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json'
//     });

//     return this.http.post<any>(`${this.baseUrl}login`, body, { headers: headers });
//   }
}