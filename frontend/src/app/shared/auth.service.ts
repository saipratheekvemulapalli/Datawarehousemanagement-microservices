import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class authService {

  constructor( private router: Router) { }
  IsLoggedIn(): boolean{
    return ! ! localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/log-in']);
  }
}
