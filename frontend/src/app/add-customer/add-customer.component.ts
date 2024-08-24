import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';

import { CustomerService } from '../customer.service';

import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

 

@Component({

  selector: 'app-add-customer',

  templateUrl: './add-customer.component.html',

  styleUrls: ['./add-customer.component.scss']

})

 

export class AddCustomerComponent implements OnInit {

  customerForm: FormGroup;

  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private fb: FormBuilder,

    private router: Router) {

    this.customerForm = this.fb.group({

      firstName: ['', [Validators.required]],

      lastName: ['', [Validators.required]],

      mobileNo: ['', [Validators.required]],

      email: ['', [Validators.required]],

    });

  }

  ngOnInit(): void {

  }

 

  saveCustomer() {

    this.customerService.addCustomer(this.customer).subscribe(data => {

      console.log(data);

      this.gotoCustomerList();

    },

      error => console.log(error));

  }

  gotoCustomerList() {

    this.router.navigate(['navBar/customer-list']);

  }

 

  navigateBack() {

    this.router.navigate(['navBar/customer-list']);

  }

 

  onSubmit() {

    if (this.customerForm.valid) {

      console.log(this.customer);

      this.saveCustomer();

    } else {

      alert("Please Enter Valid Details")

    }

  }

}