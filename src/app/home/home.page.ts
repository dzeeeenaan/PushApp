import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  homeSelected: boolean = true;
  totalScore: number = 0;
  absoluteTotal: number = 0;
  addingScore: boolean = false;

  constructor() {}

  ngOnInit() {
    this.setStartDate();
    this.getData();
    this.isNewDay();
  }

  setStartDate() {
    if (localStorage.getItem('startDate') === null) {
      let today = Math.floor(new Date().getTime() / 1000 / 86400);
      localStorage.setItem('startDate', today.toString());
    }
  }

  setHome(val: boolean) {
    this.homeSelected = val;
  }

  addScore(points: number) {
    let audio = new Audio('assets/music/hitbag.mp3');
    audio.play();
    this.addingScore = true;
    setTimeout(() => {
      this.addingScore = false;
    }, 1000);
    this.totalScore += points;
    this.absoluteTotal += points;
    localStorage.setItem('todayScore', this.totalScore.toString());
    localStorage.setItem('totalScore', this.absoluteTotal.toString());
  }

  getData() {
    if (localStorage.getItem('todayScore') !== null) {
      this.totalScore = parseInt(localStorage.getItem('todayScore'));
    } else {
      localStorage.setItem('todayScore', '0');
    }

    if (localStorage.getItem('totalScore') === null || undefined) {
      localStorage.setItem('totalScore', '0');
    } else this.absoluteTotal = parseInt(localStorage.getItem('totalScore'));
  }

  isNewDay() {
    let currentDay = new Date().getDate();
    if (localStorage.getItem('curDate') !== null) {
      let yesterday = parseInt(localStorage.getItem('curDate'));
      if (currentDay !== yesterday) this.resetDailyScore();
    }
    localStorage.setItem('curDate', currentDay.toString());
  }

  resetDailyScore() {
    this.totalScore = 0;
    localStorage.setItem('todayScore', this.totalScore.toString());
  }
}
