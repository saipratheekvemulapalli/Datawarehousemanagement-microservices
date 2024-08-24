import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private loginService : LoginService){}
  logout(){
  this.loginService.check= false;
  console.log('logged out')
  }
}
