import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';

import { CustomerService } from '../customer.service';

import { Router } from '@angular/router';

 

@Component({

  selector: 'app-customer-list',

  templateUrl: './customer-list.component.html',

  styleUrls: ['./customer-list.component.scss']

})

export class CustomerListComponent implements OnInit {

  customers: Customer[] | undefined

 

  constructor(private customerService: CustomerService,

    private router: Router) { }

 

  ngOnInit(): void {

    this.getCustomers();

  }

 

  private getCustomers() {

    this.customerService.getAllCustomers().subscribe(data => {

      this.customers = data;

    });

  }

 

  customerDetails(id: number) {

    this.router.navigate(['navBar/customer-details', id]);

  }

  updateCustomer(id: number): void {

    this.router.navigate(['navBar/update-customer', id]);

  }

 

  deleteCustomer(id: number) {

    this.customerService.deleteCustomer(id).subscribe(data => {

      console.log(data);

      this.getCustomers();

    })

  }

}

