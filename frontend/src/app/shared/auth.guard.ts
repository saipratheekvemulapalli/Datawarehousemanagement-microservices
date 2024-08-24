import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private loginService: LoginService) {}

  canActivate(): boolean {
    if (this.loginService.check) {
      // If the user is logged in, allow access to the route
      return true;
    } else {
      // If the user is not logged in, navigate to the login page or any other desired route
      this.router.navigate(['/log-in']); // Replace 'login' with your desired login route
      return false;
    }
  }
}
