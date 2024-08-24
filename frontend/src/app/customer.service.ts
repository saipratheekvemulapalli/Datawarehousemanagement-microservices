import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Product } from './product';

import { Observable } from 'rxjs';

import { Customer } from './customer';

 

 

@Injectable({

  providedIn: 'root'

})

 

export class CustomerService {

  customer: Customer | undefined;

  private baseURL = "http://localhost:9090/inventory/";

  constructor(private httpClient: HttpClient) { }

  public getAllCustomers(): Observable<Customer[]> {

    return this.httpClient.get<Customer[]>(`${this.baseURL}getallcustomer`);

  }

 

  public addCustomer(customer: Customer): Observable<Customer> {

    return this.httpClient.post<Customer>(`${this.baseURL}addcustomer`, customer);

  }

 

  getCustomerById(id: number): Observable<Customer> {

    return this.httpClient.get<Customer>(`${this.baseURL}getcustomerbyid/${id}`);

  }

 

  updateCustomer(id: number, customer: Customer): Observable<Object> {

    return this.httpClient.put(`${this.baseURL}updatecustomer`, customer);

  }

 

  deleteCustomer(id: number): Observable<Object> {

    return this.httpClient.delete(`${this.baseURL}deletecustomer/${id}`);

  }

}