import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  l:Login | undefined;
  check :boolean = false ;

  private baseURL ="http://localhost:9091/ims/";
  constructor(private httpClient: HttpClient) { }

  public login(l: Login ): Observable<Login>{
    return this.httpClient.post<Login>(`${this.baseURL}login`, l);
    
  
  }

  
}