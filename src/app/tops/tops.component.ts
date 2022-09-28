import { Component, OnInit} from '@angular/core';
import * as allprod from "../data/allproducts.json";

//import microoven service and class
import { Tops } from '../tops';
import { TopsService } from '../tops.service';

@Component({
  selector: 'app-tops',
  templateUrl: './tops.component.html',
  styleUrls: ['./tops.component.css']
})
export class TopsComponent implements OnInit {

  tops: Tops[]=[];
  //constructor injection of the MicroovenService
  constructor(private topsservice:TopsService) { }
  


  ngOnInit(): void {
    const topsObservable= this.topsservice.getTopsDetails();
    topsObservable.subscribe((topsData: Tops[])=>{
      this.tops=topsData;
    });
  }

  all:any=(allprod as any).default;
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