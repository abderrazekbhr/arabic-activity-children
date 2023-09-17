import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
const correctResult = [
  ['../../assets/a6/4.jpg','يقطع الأرنب الغذاء بأسنانه '],
  ['../../assets/a6/3.png',' مرور الغذاء إلى المعدة عبر البلعوم و المريء'],
  ['../../assets/a6/2.jpg','  تتحول الأغذية داخل المعدة إلى مغذيات ذائبة '],
  ['../../assets/a6/1.jpg',' تساهم الأمعاء الدقيقة في هضم الطعام '],
  ['../../assets/a6/5.jpg','  تخرج الفضلات عبر فتحة الشرج '],
];
@Component({
  selector: 'app-activite7',
  templateUrl: './activite7.component.html',
  styleUrls: ['./activite7.component.scss']
})
export class Activite7Component implements OnInit {
  items = [
    ['../../assets/a6/2.jpg','  تتحول الأغذية داخل المعدة إلى مغذيات ذائبة '],
    ['../../assets/a6/4.jpg','يقطع الأرنب الغذاء بأسنانه '],
    ['../../assets/a6/5.jpg','  تخرج الفضلات عبر فتحة الشرج '],
    ['../../assets/a6/1.jpg',' تساهم الأمعاء الدقيقة في هضم الطعام '],
    ['../../assets/a6/3.png',' مرور الغذاء إلى المعدة عبر البلعوم و المريء'],
  ];
  
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
  setDialog(){
    // console.log(correctResult);
    if(this.testResults()){
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

testResults(){
  for(let i=0;i<correctResult.length;i++){
    if(correctResult[i][1]!=this.items[i][1]){
      return false
    }
  }
  return true;
}

returnBack(){
  this.router.navigate([""])
}


drop(event: CdkDragDrop<string[]>) {
  console.log(this.items);
  
  moveItemInArray(this.items, event.previousIndex, event.currentIndex);
}


}
