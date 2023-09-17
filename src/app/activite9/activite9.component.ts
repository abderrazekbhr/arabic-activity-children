import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as fabric from 'fabric';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-activite9',
  templateUrl: './activite9.component.html',
  styleUrls: ['./activite9.component.scss']
})
export class Activite9Component {
  @ViewChild('canvas', { static: true }) canvasRef: ElementRef<HTMLCanvasElement> = {} as ElementRef<HTMLCanvasElement>;

  canvas!: fabric.fabric.Canvas;
  constructor(private router:Router) { }
  options: AnimationOptions = {    
    path: ''  
  };  
  brushColor="black"
  msg=""
  ngAfterViewInit() {
    this.canvas = new fabric.fabric.Canvas(this.canvasRef.nativeElement);
  
    // Add drawing capabilities
    this.canvas.isDrawingMode = true;
  
    // Set up the brush
    this.canvas.freeDrawingBrush = new fabric.fabric.PencilBrush(this.canvas);
    this.canvas.freeDrawingBrush.color = '#000000';
    this.canvas.freeDrawingBrush.width = 2;
  
    // Listen to mouse movements
    this.canvas.on('mouse:move', (event) => {
      if (this.canvas.isDrawingMode) {
        const pointer = this.canvas.getPointer(event.e);
      }
    });
  }
  
  onBrushColorChange(event: any) {
    this.canvas.freeDrawingBrush.color = event.target.value;
  }
  
  onBrushWidthChange(event: any) {
    this.canvas.freeDrawingBrush.width = event.target.value;
  }

setDialog(){

  this.options = {    
    path: "https://assets2.lottiefiles.com/datafiles/d2PQkkDcP77TPTeBzAx7iQMu6zJOARPXuafCB19k/success.json" 
  };  
  this.msg="أحسنت الجوب صحيح "
}

returnBack(){
  this.router.navigate([""])
}

onRemoveLastDraw() {
  const lastObject = this.canvas.getObjects().pop();
  if (lastObject) {
    this.canvas.remove(lastObject);
  }
}
}
