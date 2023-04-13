import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PagenotComponent } from './pagenot/pagenot.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'products',component:ProductsComponentComponent,children:[
  {path:'updateProduct/:p',component:UpdateProductComponent},
  ]},
  {path:'**',component:PagenotComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
