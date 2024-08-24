import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  users = [
    // { userName : 'gnana', password: '123456' },
    // {userName: 'teja', password: '123456' },
    // { userName: 'ganesh', password: '123456' },
    // { userName: 'prathemesh', password: '123456' },
    // { userName: 'anusha', password: '123456' },
    // { userName: 'neha', password: '123456' }
    // Add more users as needed
  ];
  constructor(private fb: FormBuilder, private router: Router,private loginService :LoginService) {}
ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  userLogin(){
    
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    // Get form values
   
    const formData = this.loginForm.value;
    console.log('Form data:', formData);
    this.loginService.login(formData).subscribe((response)=>{
      alert('LOGIN SUCCESSFULL');
      this.loginService.check=true;
      this.router.navigateByUrl('navBar/home');
    return;},(error)=>{
            alert('BAD CREDENTIALS');
    });
    // const user = this.users.find(u => u.userName == this.loginForm.value.userName && u.password == this.loginForm.value.password);
    // if (user) {
    //  this.check=true;
    //   //this.loginAuth.token=true;
    //   this.router.navigateByUrl('navBar/category-list')
    //   //this.router.navigateByUrl('add-category')
    //   //this.router.navigateByUrl('update-category/:id')
    //   //this.router.navigateByUrl('category-details/:id')
    //  // this.router.navigateByUrl('add-product')
    //   alert("Login successful")

      
      
    // } else {
    //   alert("Invalid email or password");
    // }
  }
 
}

// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
//export class LoginComponent {
  // username: string = '';
  // password: string = '';

  // constructor(private authService: AuthService) {}

  // onSubmit(): void {
  //   this.authService.login(this.username, this.password).subscribe(
  //     response => {
  //       // Handle a successful login here
  //       console.log('Token:', response.token);
  //       console.log('Role:', response.role);
  //       // Redirect to another page or perform additional actions
  //     },
  //     error => {
  //       // Handle login errors here
  //       console.error('Error:', error.error.message);
  //     }
  //   );
  // }

  
