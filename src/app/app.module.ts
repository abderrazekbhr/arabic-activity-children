import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { Activite1Component } from './activite1/activite1.component';
import { Activite2Component } from './activite2/activite2.component';
import { Activite3Component } from './activite3/activite3.component';
import { Activite4Component } from './activite4/activite4.component';
import { Activite5Component } from './activite5/activite5.component';
import { Activite6Component } from './activite6/activite6.component';
import { Activite7Component } from './activite7/activite7.component';
import { Activite8Component } from './activite8/activite8.component';
import { Activite9Component } from './activite9/activite9.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
export function playerFactory(): any {  
  return import('lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    Activite1Component,
    Activite2Component,
    Activite3Component,
    Activite4Component,
    Activite5Component,
    Activite6Component,
    Activite7Component,
    Activite8Component,
    Activite9Component
  ],
  imports: [
    MatCardModule,
    LottieModule.forRoot({ player: playerFactory }),  
    BrowserModule,FormsModule ,
    AppRoutingModule,DragDropModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
