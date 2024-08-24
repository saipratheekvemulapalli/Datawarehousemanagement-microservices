import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';

import { CustomerService } from '../customer.service';

import { ActivatedRoute,Router } from '@angular/router';

import { FormBuilder,FormGroup,Validators } from '@angular/forms';

 

@Component({

  selector: 'app-update-customer',

  templateUrl: './update-customer.component.html',

  styleUrls: ['./update-customer.component.scss']

})

 

 

export class UpdateCustomerComponent implements OnInit{

  customerForm: FormGroup;

  id!: number;

  customer: Customer=new Customer();

  constructor(private customerService: CustomerService,

    private route: ActivatedRoute,private fb:FormBuilder,

    private router: Router){

      this.customerForm = this.fb.group({

        firstName: ['', [Validators.required]],

        lastName: ['', [Validators.required]],

        mobileNo: ['', [Validators.required]],

        email: ['', [Validators.required]],

      });

  }

 

  ngOnInit(): void {

      this.id=this.route.snapshot.params['id'];

      this.customerService.getCustomerById(this.id).subscribe(data =>{

      this.customer=data;

      }, error=>console.log(error));

  }

 

  onSubmit(){

    if(this.customerForm.valid){

    this.customerService.updateCustomer(this.id, this.customer).subscribe(data=>{

    this.gotoCustomerList();

  })}

 

  else{ alert("Please Enter Valid Details")}

  }

 

  gotoCustomerList(){

    this.router.navigate(['navBar/customer-list']);

  }

}
