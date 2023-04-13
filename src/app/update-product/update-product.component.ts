import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
id!:number;
  constructor(private route:ActivatedRoute){

  }
  ngOnInit(): void {
this.route.paramMap.subscribe(data=>{
  this.id=Number(data.get('p'))
})
  }

}
