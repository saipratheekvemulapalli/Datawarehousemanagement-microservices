import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { LoginAuth } from '../LoginAuth.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit{
  loginForm: FormGroup;
  category: Category=new Category();
  constructor(private fb: FormBuilder, private categoryService: CategoryService,
    private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      catName: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }
  saveCategory(){
    this.categoryService.addCategory(this.category).subscribe(data=>{
      console.log(data);
      this.gotoCategoryList();
    },
    error=>{alert("category Id already exist")});
      
  }

  gotoCategoryList(){
    this.router.navigate(['/categories']);
  }
  async onSubmit(){

    if (this.loginForm.invalid) {
      console.log("BAD REQUEST");
      return;
    }

    
      console.log(this.category);
      await this.saveCategory();
 this.router.navigateByUrl('navBar/category-list');

    //   const formData = this.loginForm.value;
    // console.log('Form data:', formData);
    // this.categoryService.saveCategory(formData).subscribe((response)=>{
    //   alert('LOGIN SUCCESSFULL');
    //   this.check=true;
    //   this.router.navigateByUrl('navBar/category-list');
    // return;},(error)=>{
    //         alert('BAD CREDENTIALS');
    
  }
}
