import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Product } from './product';

import { Observable } from 'rxjs';

 

@Injectable({

    providedIn: 'root'

  })

 

  export class ProductService {

 

    product:Product | undefined;

   

 

    private baseURL ="http://localhost:8089/ims/";

    constructor(private httpClient: HttpClient) { }

 

    public getAllProducts(): Observable<Product[]>{

      return this.httpClient.get<Product[]>(`${this.baseURL}getallproducts`);

    }

    public addProduct(product: Product): Observable<Product> {

      return this.httpClient.post<Product>(`${this.baseURL}addproduct`, product);

    }

 

    getProductById(id: number): Observable<Product>{

      return this.httpClient.get<Product>(`${this.baseURL}getproduct/${id}`);

    }

 

    updateProduct(id: number,product: Product):Observable<Object>{

      return this.httpClient.put(`${this.baseURL}updateproduct`,product);

    }

    deleteProduct(id: number): Observable<Object>{

      return this.httpClient.delete(`${this.baseURL}deleteproduct/${id}`);

    }

  }