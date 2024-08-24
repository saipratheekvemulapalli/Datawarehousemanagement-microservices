import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  category:Category | undefined;

 

  private baseURL ="http://localhost:8085/category/";
  constructor(private httpClient: HttpClient) { }

  public getAllCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseURL}viewallcategory`);
  }
  public addCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(`${this.baseURL}addcategory`, category);
  }

  public getCategoryById(id: number): Observable<Category>{
    return this.httpClient.get<Category>(`${this.baseURL}viewcategory/${id}`);
  }

  updateCategory(id: number,category: Category):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}updatecategory`,category);
  }
  deleteCategory(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}removecategory/${id}`);
  }

  getProductsOfOneCategory(category: string): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}oneCategoryProducts/${category}`);
  }
}

