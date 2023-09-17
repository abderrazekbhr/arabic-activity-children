import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import * as fabric from 'fabric';

@Component({
  selector: 'app-activite6',
  templateUrl: './activite6.component.html',
  styleUrls: ['./activite6.component.scss']
})
export class Activite6Component  implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef: ElementRef<HTMLCanvasElement> = {} as ElementRef<HTMLCanvasElement>;
  canvas!: fabric.fabric.Canvas;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  options: AnimationOptions = {    
    path: ''  
  };  
  brushColor="black"
  msg=""
  ngAfterViewInit() {
    this.canvas = new fabric.fabric.Canvas(this.canvasRef.nativeElement);
    const images = [
      { url: '../../assets/a7/1.jpg',left: 150, top:75+ 150 },
      { url: '../../assets/a7/2.jpg',left: 400, top:75+ 150 },
      { url: '../../assets/a7/3.jpg',left: 650, top:75+150 },
      { url: '../../assets/a7/4.jpg',left: 920, top:75+150 },
      { url: '../../assets/a7/5.jpg',left: this.canvas.getWidth()/2, top:75+ this.canvas.getHeight()/2+50 }
    ];

    for (const img of images) {
      fabric.fabric.Image.fromURL(img.url, (image) => {
        image.set({
          left: img.left,
          top: img.top,
          originX: 'center',
          originY: 'center',
        });

        this.canvas.add(image);
        this.canvas.renderAll();
      });
    }

    // Add drawing capabilities
    this.canvas.isDrawingMode = true;
  
    // Set up the brush
    this.canvas.freeDrawingBrush = new fabric.fabric.PencilBrush(this.canvas);
    this.canvas.freeDrawingBrush.color = '#000000aa';
    this.canvas.freeDrawingBrush.width = 15;
  
    // Listen to mouse movements
    this.canvas.on('mouse:move', (event) => {
      if (this.canvas.isDrawingMode) {
        const pointer = this.canvas.getPointer(event.e);
      }
    });
  }
  
  onBrushColorChange(event: any) {
    this.canvas.freeDrawingBrush.color = event.target.value;
    this.canvas.freeDrawingBrush.color+="aa"
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
  const allObjects=this.canvas.getObjects()
  const lastObject = allObjects.pop();
  
  
  if (allObjects.length>4 && lastObject) {
    this.canvas.remove(lastObject);
  }

}}

