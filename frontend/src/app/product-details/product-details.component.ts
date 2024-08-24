import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';

import { Product } from '../product';

 

@Component({

  selector: 'app-product-details',

  templateUrl: './product-details.component.html',

  styleUrls: ['./product-details.component.scss']

})

export class ProductDetailsComponent implements OnInit {

    id!:number;

    product!: Product;

  constructor(private route:ActivatedRoute, private productService:ProductService ){}

   

   ngOnInit(): void {

       this.id=this.route.snapshot.params['id'];

       this.productService.getProductById(this.id).subscribe(data=>{

        this.product=data;

       })

   }

 

}