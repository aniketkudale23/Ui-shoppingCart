import { Component, OnInit } from '@angular/core';
import { stagger } from '@angular/core/src/animation/dsl';
import { Router } from '@angular/router'; 
import {PostrequestService} from '../postrequest.service'
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [PostrequestService]
})
export class HomepageComponent implements OnInit {
   
  constructor(private postrequest: PostrequestService) {
   }
mydata = [];
//var listOfLists : number[][];
data_var = [];
 product: {
  productId: number,
   productName: String,
    price: number,
     qty: number,
      image: String
}
 
  ngOnInit() {   
    console.log("into onINIT")
    this.postrequest.getProducts().subscribe((data: any)=> this.mydata = data )   
     console.log( "mydata", this.mydata)
  }
  addToCart(x)
  {
    x["category"] = null;
   console.log("Added into cart", x) 
  }
}
