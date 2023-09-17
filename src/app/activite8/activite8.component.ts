import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
const correctResult = [
  ["../../assets/a8/2.jpg","قطع الطعام ",],
  ["../../assets/a8/4.jpg","  طحن الطعام ",],
  ["../../assets/a8/1.jpg","  تمزيق الطعام ",],
  ["../../assets/a8/3.jpg"," سحق الطعام "],
];

@Component({
  selector: 'app-activite8',
  templateUrl: './activite8.component.html',
  styleUrls: ['./activite8.component.scss']
})
export class Activite8Component implements OnInit {
 
texts = [
  "قطع الطعام ",
  "  طحن الطعام ",
  "  تمزيق الطعام ",
  " سحق الطعام "
];
images:string[]=[
  "../../assets/a8/1.jpg",
  "../../assets/a8/2.jpg",
  "../../assets/a8/3.jpg",
  "../../assets/a8/4.jpg",
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

  setDialog(){
    // console.log(correctResult);

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
    for(let i=0;i<this.images.length;i++){
      let index=this.texts.indexOf(correctResult[i][1])
      console.log(correctResult[i]);
      console.log(this.images[index]);
      
      if(this.images[index]!=correctResult[i][0]){
        return false 
    }
    }
    return true
  }
}
