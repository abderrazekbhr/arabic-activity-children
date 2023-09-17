import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navActivte1(){
    this.router.navigate(["activite1"])
  }
  navActivte2(){
    this.router.navigate(["activite2"])
  }
  navActivte3(){
    this.router.navigate(["activite3"])
  }
  navActivte4(){
    this.router.navigate(["activite4"])
  }
  navActivte5(){
    this.router.navigate(["activite5"])
  }
  navActivte6(){
    this.router.navigate(["activite6"])
  }
  navActivte7(){
    this.router.navigate(["activite7"])
  }
  navActivte8(){
    this.router.navigate(["activite8"])
  }
  navActivte9(){
    this.router.navigate(["activite9"])
  }

}
