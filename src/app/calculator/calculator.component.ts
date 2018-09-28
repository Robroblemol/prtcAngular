import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  imp: number;
  por: number = 10;
  res: number = 0;
  flag_p: boolean;
  calculated() {
    if (this.flag_p == true) {
      console.log(this.imp + (this.imp*this.por)/100)
      this.res = this.imp + (this.imp*this.por)/100;
    }else{
      console.log(this.imp)
      this.res = this.imp;
    }
  }
  checkPro(){
    console.log(this.flag_p)
    if(this.flag_p)this.flag_p =false;
    else this.flag_p = true;
    console.log(this.flag_p)
  }
  constructor() { }

  ngOnInit() {
  }

}
