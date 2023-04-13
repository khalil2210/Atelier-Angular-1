import { Product } from './../model/Product';
import { Component } from '@angular/core';


@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent  {


ngOnInit(){}
ListProduct:Product[]=[
{id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
{id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
{id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]

List:any=[1];
value!:number;


buyProduct(product:Product){
product.quantity-=1;}

likeProduct(product:Product){
product.like+=1}


}
