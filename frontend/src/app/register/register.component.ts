import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  passwordsMatch :boolean =true;
  u: Admin= new Admin();
  bool : boolean;
  RegisterForm!: FormGroup;
  users = [
    // Add more users as needed
  ];
  
  constructor (private router:Router,private fb: FormBuilder, private adminService : AdminService, private loginService: LoginService){}
  ngOnInit(): void {

    this.RegisterForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.bool = !this.loginService.check;
    //this.RegisterForm.get('confirmPassword')?.setValidators(passwordMatchValidator());
  }
  userRegister() {
    if(this.RegisterForm.value.password != this.RegisterForm.value.confirmPassword){
      this.passwordsMatch=false;
      return;
    }
    if(this.RegisterForm.invalid){
      alert("not valid");
      return;
    }
    this.u.userName=this.RegisterForm.value.userName;
    this.u.password = this.RegisterForm.value.password;
    this.u.confirmpassword= this.RegisterForm.value.confirmpassword;
    this.u.role='admin';
    this.adminService.postUser(this.u).subscribe(
      (response) => {
        alert('Admin Added Succesfully');
        this.router.navigate(['/log-in'])
      },
      (error) => {
        console.log(error);
        alert('invalid values, please check');
      });
    
    
  }
 
}


export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true }; // Validation error if passwords don't match
    }

    return null; // No validation error
  }
}






