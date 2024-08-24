import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
 import { LoginComponent } from './login/login.component';
 import { AuthGuard } from './shared/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  //{path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'log-in',component:LoginComponent},
  {path:'home-page', component:HomePageComponent},
  // {path:'category-list',component:CategoryListComponent},
  // {path:'add-category',component:AddCategoryComponent},
  // {path: 'update-category/:id', component:UpdateCategoryComponent},
  // {path: 'category-details/:id',component:CategoryDetailsComponent},
  // {path: 'add-product',component:AddProductComponent},
  {path:'', redirectTo: 'home-page', pathMatch : 'full'},
  {path:'navBar', loadChildren: () => import('./man-bar/man-bar.module').then((m)=>m.ManBarModule),canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
