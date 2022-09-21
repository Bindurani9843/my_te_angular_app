import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/product.json';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  
  product:any=(productdetails as any).default;

}
