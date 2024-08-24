import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { CategoryDetailsComponent } from '../category-details/category-details.component';
import { CategoryListComponent } from '../category-list/category-list.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { HomeComponent } from '../home/home.component';
import { ManBarDashBoardComponent } from '../man-bar-dash-board/man-bar-dash-board.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { RegisterComponent } from '../register/register.component';
import { AuthGuard } from '../shared/auth.guard';
import { UpdateCategoryComponent } from '../update-category/update-category.component';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';
import { UpdateProductComponent } from '../update-product/update-product.component';

const routes: Routes = [
  {path:'', component: ManBarDashBoardComponent, children: [
   {path:'category-list',component:CategoryListComponent },
  //{path:'category-list',component:CategoryListComponent },
  {path:'home',component:HomeComponent},
  {path:'add-category',component:AddCategoryComponent},
  {path: 'update-category/:id', component:UpdateCategoryComponent},
  {path: 'category-details/:id',component:CategoryDetailsComponent},
  {path: 'add-product',component:AddProductComponent},
  {path:'register',component:RegisterComponent},
  {path:'product-list', component: ProductListComponent},
  {path: 'product-details/:id', component: ProductDetailsComponent},
  {path:'update-product/:id', component: UpdateProductComponent},
  {path:'add-customer', component:AddCustomerComponent},
  {path:'customer-details/:id',component:CustomerDetailsComponent},
  {path:'update-customer/:id', component:UpdateCustomerComponent},
  {path:'customer-list', component:CustomerListComponent},
  {path: '', redirectTo: '/navBar/home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManBarRoutingModule { }
