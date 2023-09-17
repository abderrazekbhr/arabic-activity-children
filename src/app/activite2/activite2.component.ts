import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
const respCorrect=[
  "الجسم","حمايته","اللمس","الحرارة","التعرق"
]
@Component({
  selector: 'app-activite2',
  templateUrl: './activite2.component.html',
  styleUrls: ['./activite2.component.scss']
})
export class Activite2Component implements OnInit {

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
    
    if(result.value[1]==respCorrect[0] && result.value[2]==respCorrect[1] && result.value[3]==respCorrect[2] && result.value[4]==respCorrect[3] && result.value[5]==respCorrect[4] ){
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
