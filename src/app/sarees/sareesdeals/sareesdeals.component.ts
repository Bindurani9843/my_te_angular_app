import { Component, OnInit } from '@angular/core';
import * as sarees from "../sarees.json";

//npm install sweetalert2

@Component({
  selector: 'app-sareesdeals',
  templateUrl: './sareesdeals.component.html',
  styleUrls: ['./sareesdeals.component.css']
})
export class SareesdealsComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  } sarees:any=(sarees as any).default;

  
  productDetail=false;
  
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


