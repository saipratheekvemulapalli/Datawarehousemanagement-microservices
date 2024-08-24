import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router){}
  onLogin(){
    this.router.navigate(['/login']);
    }
    onRegister() {
      this.router.navigate(['/register'])
    }
    onClick1(){
      this.router.navigate(['navBar/product-list'])
    }
    onClick2(){
      this.router.navigate(['navBar/category-list'])
    }

    onClick3(){
      this.router.navigate(['navBar/customer-list'])
    }
}
