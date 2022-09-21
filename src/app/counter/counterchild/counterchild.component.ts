import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {
  counterValue=1;
  countLessThenOne=true;
  
  @Output() countEmmitter =new EventEmitter(); 

  PostValue(){
    this.countEmmitter.emit(this.counterValue);
  }

  
  decrement(){
    if(this.counterValue==1)
    {
      this.countLessThenOne=false;
    }
    else{
      this.countLessThenOne=true;
      this.counterValue--;
    }
    this.PostValue();
  }

  increment(){
    if(this.counterValue==20){
      this.countLessThenOne=false;
      this.countLessThenOne=true;
    }
    else{
      this.countLessThenOne=true;
      this.countLessThenOne=true;
      this.counterValue++;
    }
    this.PostValue();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
