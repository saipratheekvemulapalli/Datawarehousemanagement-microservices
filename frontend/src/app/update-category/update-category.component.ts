import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {

  id!: number;
  category: Category=new Category();
  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router){

    
  }
  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.categoryService.getCategoryById(this.id).subscribe(data => {
      this.category=data;
    }, error=>console.log(error));
    
  }
  

onSubmit(){
  this.categoryService.updateCategory(this.id,this.category).subscribe(data=>{
    this.gotoCategoryList();
    //this.router.navigateByUrl('navBar/category-list');

  }, error=>console.log(error));

}
gotoCategoryList(){
  this.router.navigate(['navBar/category-list']);
}
}
