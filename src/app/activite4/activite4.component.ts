
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as fabric from 'fabric';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-activite4',
  templateUrl: './activite4.component.html',
  styleUrls: ['./activite4.component.scss']
})
export class Activite4Component  {
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
      { url: '../../assets/4.png',left: this.canvas.getWidth()/2,top:this.canvas.getHeight()/2 },
    ];

    for (const img of images) {
      fabric.fabric.Image.fromURL(img.url, (image) => {
        image.set({
          left: img.left,
          top: img.top,
          originX: 'center',
          originY: 'center',
          scaleX:0.5,
          scaleY:0.5,
        });

        this.canvas.add(image);
        this.canvas.renderAll();
      });
    }

    // Add drawing capabilities
    this.canvas.isDrawingMode = true;
  
    // Set up the brush
    this.canvas.freeDrawingBrush = new fabric.fabric.PencilBrush(this.canvas);
    this.canvas.freeDrawingBrush.color = '#00000099';
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
    this.canvas.freeDrawingBrush.color+="99"
  }
  
  onBrushWidthChange(event: any) {
    this.canvas.freeDrawingBrush.width = event.target.value;
  }


returnBack(){
  this.router.navigate([""])
}

onRemoveLastDraw() {
  const allObjects = this.canvas.getObjects();
  const lastObject = allObjects.pop();
  if ( allObjects.length>0 && lastObject) {
    this.canvas.remove(lastObject);
  }

}
}
