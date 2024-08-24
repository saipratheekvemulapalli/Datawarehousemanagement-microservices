import { Component, OnInit } from '@angular/core';

import { Product } from '../product';

import { ProductService } from '../product.service';

import { ActivatedRoute,Router } from '@angular/router';

import { FormBuilder,FormGroup,Validators } from '@angular/forms';

 

@Component({

  selector: 'app-update-product',

  templateUrl: './update-product.component.html',

  styleUrls: ['./update-product.component.scss']

})

 

export class UpdateProductComponent implements OnInit{

  productForm: FormGroup;

  id!: number;

  product: Product=new Product();

  constructor(private productService: ProductService,

    private route: ActivatedRoute,private fb:FormBuilder,

    private router: Router){

      this.productForm = this.fb.group({

        productName: ['', [Validators.required]],

       price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],

       specification: ['',[Validators.required]],

       quantity: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],

        category: ['', [Validators.required]],

      });

  }

  ngOnInit(): void {

      this.id=this.route.snapshot.params['id'];

      this.productService.getProductById(this.id).subscribe(data =>{

      this.product=data;

      }, error=>console.log(error));

  }

 

  onSubmit(){
    this.productService.updateProduct(this.id, this.product).subscribe(data=>{
    this.gotoProductList();

    },error=>console.log(error));

  //else{ alert("Please Enter Valid Details")}

  }

 

  gotoProductList(){

    this.router.navigate(['navBar/product-list']);

  }

}
