import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
const correctResult = {
  1: "1",
  2: "1",
  3: "2",
  4: "1",
  5: "2"
}
@Component({
  selector: 'app-activite3',
  templateUrl: './activite3.component.html',
  styleUrls: ['./activite3.component.scss']
})
export class Activite3Component implements OnInit {

  
  respWrang: string = "https://assets7.lottiefiles.com/packages/lf20_pojzngga.json";
  respCorrect: string = "https://assets2.lottiefiles.com/packages/lf20_cehxtohr.json";
  options: AnimationOptions = {    
    path: ''  
  };  
  msg=""
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  setDialog(result:NgForm){
    console.log(result.value);
    
    if(result.value["1"]==correctResult["1"] && result.value["2"]==correctResult["2"] && result.value["3"]==correctResult["3"] && result.value["4"]==correctResult["4"] && result.value["5"]==correctResult["5"] ){
      this.options = {    
        path: this.respCorrect  
      };  
      this.msg="أحسنت الجوب صحيح "
    }
    else{
      this.options ={
        path: this.respWrang
    }
    this.msg="الجواب خاطئ"
  }
}
returnBack(){
  this.router.navigate([""])
}

}
