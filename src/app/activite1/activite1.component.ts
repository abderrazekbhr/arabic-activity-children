import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
export interface table{
  img:string,text:string
}
import { AnimationOptions } from 'ngx-lottie';
const correctResult=[
  "../../assets/a1/p2.jpg",
  "../../assets/a1/p5.jpg",
  "../../assets/a1/p1.jpg",
  "../../assets/a1/p3.jpg",
  "../../assets/a1/p4.jpg",
]
@Component({
  selector: 'app-activite1',
  templateUrl: './activite1.component.html',
  styleUrls: ['./activite1.component.scss']
})
export class Activite1Component implements OnInit {
  data:table[]=[
    {
      text:" بالفم أتذوق الطعام",
      img:"../../assets/a1/r6.jpg"
    },
    {
      text:"بالأذن اسمع الموسيقى",
      img:"../../assets/a1/r1.jpg"
    },
    {
      text:"باليدين المس القطة",
      img:"../../assets/a1/r2.jpg"
    },
    {
      text:"بالعينين أرى قوس قزح",
      img:"../../assets/a1/r3.jpg"
    },
    {
      text:"بالأنف أشم الورد",
      img:"../../assets/a1/r4.jpg"
    }
  ]
  images:string[]=[
    "../../assets/a1/p1.jpg",
    "../../assets/a1/p2.jpg",
    "../../assets/a1/p3.jpg",
    "../../assets/a1/p4.jpg",
    "../../assets/a1/p5.jpg",
  ]
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
    
    if(this.testCorrect()){
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
drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    const updatedContainerData = [...event.container.data];
    const draggedItem = event.previousContainer.data[event.previousIndex];
    updatedContainerData.splice(event.currentIndex, 0, draggedItem);
    event.previousContainer.data.splice(event.previousIndex, 1);
    event.container.data = updatedContainerData;
  }
}
testCorrect(){
  for(let i=0;i<5;i++){
    if(this.images[i]!=correctResult[i]){
      return false
    }
  }
  return true;
}
}
