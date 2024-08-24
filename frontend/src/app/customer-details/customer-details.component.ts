import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';

import { ActivatedRoute, Router } from '@angular/router';

import { CustomerService } from '../customer.service';

 

 

@Component({

  selector: 'app-customer-details',

  templateUrl: './customer-details.component.html',

  styleUrls: ['./customer-details.component.scss']

})

export class CustomerDetailsComponent implements OnInit {

  id!: number;

  customer!: Customer;

  constructor(private router: Router,private route: ActivatedRoute, private customerService: CustomerService){}

 

  ngOnInit(): void {

 

    this.id= this.route.snapshot.params['id'];

    this.customerService.getCustomerById(this.id).subscribe(data=>{

      this.customer=data;

     

    })

   

  }

 

}

 