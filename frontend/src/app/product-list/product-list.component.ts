import { Component, OnInit } from '@angular/core';

import { Product } from '../product';

import { ProductService } from '../product.service';

import { Router } from '@angular/router';

 

@Component({

  selector: 'app-product-list',

  templateUrl: './product-list.component.html',

  styleUrls: ['./product-list.component.scss']

})

export class ProductListComponent implements OnInit{

  products: Product[] | undefined

 

  constructor(private productService:ProductService,

    private router: Router) {}

 

  ngOnInit(): void {

    this.getProducts();

  }

 

  private getProducts(){

    this.productService.getAllProducts().subscribe(data => {

      this.products=data;

    });

  }

 

  productDetails(id: number){

    this.router.navigate(['navBar/product-details',id]);

  }

  updateProduct(id:number): void {

    this.router.navigate(['navBar/update-product',id]);

  }

 

  deleteProduct(id:number) {

    this.productService.deleteProduct(id).subscribe(data=>{

      console.log(data);

      this.getProducts();

    })

  }

}