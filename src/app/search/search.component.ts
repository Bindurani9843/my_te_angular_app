import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 
  _productname:any | undefined;

  

  @Input('product') 
  
  set pname(pname:any) 
  {
    this._productname=pname || 'not found';
    console.log(pname)
  }
  //read
  get pname():string
  {
    return this._productname;
  }
}
