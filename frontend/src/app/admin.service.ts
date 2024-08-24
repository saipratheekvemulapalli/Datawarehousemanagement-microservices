import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  u:Admin | undefined;
 

  private baseURL ="http://localhost:9091/ims/";
  constructor(private httpClient: HttpClient) { }

  public postUser(u: Admin ): Observable<Admin>{
    return this.httpClient.post<Admin>(`${this.baseURL}register`, u);
    
  
  }

  
}

