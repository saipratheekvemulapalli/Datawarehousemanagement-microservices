import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] | undefined
  
  
  constructor(private categoryService:CategoryService,
    private router: Router  ) {}
  ngOnInit(): void {
    this.getCategories();
  }
  private getCategories(){
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories=data;
    });
  }

  categoryDetails(category: Category){
    this.router.navigate(['navBar/category-details',category.catId]);
    

  }


  updateCategory(id:number): void {
    this.router.navigate(['navBar/update-category',id]);
}

deleteCategory(id:number) {
  this.categoryService.deleteCategory(id).subscribe(data=>{
    console.log(data);
    this.getCategories();
  })
}


}