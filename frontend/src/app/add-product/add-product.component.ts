

import { Component, OnInit } from '@angular/core';

//import { Product } from '../product';
import { Product } from '../product';
import { ProductService } from '../product.service';

import { Router } from '@angular/router';

import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Category } from '../category';

 

@Component({

  selector: 'app-add-product',

  templateUrl: './add-product.component.html',

  styleUrls: ['./add-product.component.scss']

})

 

export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  categories: Category[];
  //selectedCategory: Category
 

 

  product: Product=new Product();

  constructor(private productService: ProductService, private fb:FormBuilder, private categoryService: CategoryService,

    private router: Router) {

      this.productForm = this.fb.group({

            productName: ['', [Validators.required]],

           price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],

           specification: ['',[Validators.required]],

           quantity: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],

            category: ['', [Validators.required]],

          });

    }

 

  ngOnInit(): void {
  

    this.categoryService.getAllCategories().subscribe(data => {
      this.categories=data;
    });
  }

 

  saveProduct(){

    this.productService.addProduct(this.product).subscribe(data=>{

      console.log(data);

      this.gotoProductList();

    },

    error=>console.log(error));

  }

 

  gotoProductList(){

    this.router.navigate(['navBar/product-list']);

  }

 

  navigateBack() {

        this.router.navigate(['navBar/product-list']);

  }

 

  onSubmit(){

    if(this.productForm.valid){

    console.log(this.product);

    this.saveProduct();

    } else {

      alert("Please Enter Valid Details")

    }

  }

}