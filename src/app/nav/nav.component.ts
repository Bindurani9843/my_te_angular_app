import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  
  title = 'Myntra';
  
  public logo="https://images.indianexpress.com/2021/01/myntra.png";
  //EVENT BINDING
  onSearch()
  {
    alert("Will contact shortly");
  }

  
  productentered: string=' '  

  
  search_product(product_name:string):void{ 
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name; 
    console.log(product_name)
  }

  ngOnInit(): void {
  }

}
