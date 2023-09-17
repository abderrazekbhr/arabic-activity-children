import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
const correctResult={
1: "سعال",
2: "الم في الحلق",
3: "ارتفاع درجة الحرارة",
4: "سيلان الأنف",
5: "صداع"
}
@Component({
  selector: 'app-activite5',
  templateUrl: './activite5.component.html',
  styleUrls: ['./activite5.component.scss']
})
export class Activite5Component implements OnInit {

  respWrang: string = "https://assets7.lottiefiles.com/packages/lf20_pojzngga.json";
  respCorrect: string = "https://assets2.lottiefiles.com/packages/lf20_cehxtohr.json";
  options: AnimationOptions = {    
    path: ''  
  };  
  msg=""
  constructor(private router:Router) { }

  ngOnInit(): void {
    // let test="صداع"
    // console.log("صداع"==test);
    
  }
  setDialog(result:NgForm){
    console.log(result.value);
    console.log(correctResult);
    
    if(result.value[1]==correctResult[1] && result.value[2]==correctResult[2] && result.value[3]==correctResult[3] && result.value[4]==correctResult[4] && result.value[5]==correctResult[5] ){
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
