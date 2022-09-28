import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService:UserService,private cartSvc:CartService) { }
  auth:boolean=false;
  cartCount: number=0;
  title = 'Myntra';
  
  public logo="https://images.indianexpress.com/2021/01/myntra.png";
  //EVENT BINDING
 // onSearch()
 // {
   // alert("Will contact shortly");
  //}

  
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
    this.authService.authSubject.subscribe(
      data =>
      {
        console.log('auth inside nav component: ' + data);
        this.auth=data;
      }
    );
    this.cartSvc.getCartItems().subscribe (     
      (response) =>
       {        
        this.cartCount=response.length;
        console.log(this.cartCount);
       }
     ) 
    this.cartSvc.countSubject.subscribe (     
      (response) =>
       {        
        this.cartCount=response;
        console.log(this.cartCount);
       }
     ) 
   
  }

}