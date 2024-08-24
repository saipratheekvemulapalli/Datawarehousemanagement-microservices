import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
 import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component'

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
//import { CustomerComponent } from './customer/customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ManBarDashBoardComponent } from './man-bar-dash-board/man-bar-dash-board.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
// import { UpdateCategoryComponent } from './update-category/update-category.component';




@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
     RegisterComponent,
     LoginComponent,
     CategoryListComponent,
     AddCategoryComponent,
     UpdateCategoryComponent,
     CategoryDetailsComponent,
    //CustomerComponent,
     AddProductComponent,
     ManBarDashBoardComponent,
     HeaderComponent,
     UpdateCategoryComponent,
     ProductListComponent,
     UpdateProductComponent,
     ProductDetailsComponent,
     HomePageComponent,
     AddCustomerComponent,
     CustomerDetailsComponent,
     UpdateCustomerComponent,
     CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
