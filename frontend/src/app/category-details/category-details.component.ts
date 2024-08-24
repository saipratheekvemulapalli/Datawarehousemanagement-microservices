import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { Product } from '../product';


@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  id!: number;
  category: Category ={catId:0,catName:''};
  products! : any[];
  constructor(private router: Router,private route: ActivatedRoute, private categoryService: CategoryService, private productSerevice: ProductService){}
  
  ngOnInit(): void {
    // if(!this.loginAuth.token){
    //   this.router.navigateByUrl('log-in');
    //   return;
    // }
    this.viewCategory();
    
  }

   viewCategory(){
    this.id= this.route.snapshot.params['id'];
     this.categoryService.getCategoryById(this.id).subscribe(data=>{
      this.category=data;
        this.categoryService.getProductsOfOneCategory(this.category.catName).subscribe(prod=>{
          this.products=prod;
          console.log(this.products);
        });
    });
   
  }

}
