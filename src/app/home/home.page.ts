import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  totalScore:number;

  constructor() {}

  ngOnInit(){
    this.getData();
  }


  addScore(points:number){
    this.totalScore+=points;
    localStorage.setItem('score',this.totalScore.toString());
  }

  getData(){
    if(localStorage.getItem('score')!==null){
     this.totalScore=parseInt(localStorage.getItem('score'));
      }else this.totalScore=0;
  }



}
