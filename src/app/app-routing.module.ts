import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '',component: MainPageComponent },
  { path: 'activite1',component: Activite1Component },  
  { path: 'activite2',component: Activite2Component },  
  { path: 'activite3',component: Activite3Component },  
  { path: 'activite4',component: Activite4Component },  
  { path: 'activite5',component: Activite5Component },  
  { path: 'activite6',component: Activite6Component },  
  { path: 'activite7',component: Activite7Component },  
  { path: 'activite8',component: Activite8Component },  
  { path: 'activite9',component: Activite9Component },
  { path: '**',redirectTo:""}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
