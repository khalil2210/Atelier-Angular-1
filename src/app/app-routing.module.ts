import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path:'products',component:ProductsComponentComponent,

  },
  {path:'home',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
