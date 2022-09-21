import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/allproducts.json";
import { Contactus } from '../contactus';
import { ContactusService } from '../contactus.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactus:Contactus[]=[];
  
  constructor(private contactusservice:ContactusService) { }

  ngOnInit(): void {
    const contactusObservable= this.contactusservice.getcontactusDetails();
    contactusObservable.subscribe((contactusData: Contactus[])=>{
      this.contactus=contactusData;
    });
  }
  all:any=(allprod as any).default;
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