import { Component, OnInit } from '@angular/core';
import * as kurtis from "../data/kurtis.json";

@Component({
  selector: 'app-kurtis',
  templateUrl: './kurtis.component.html',
  styleUrls: ['./kurtis.component.css']
})
export class KurtisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }kurtis:any=(kurtis as any).default;

  //Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }
}


