import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  totalScore: number = 0;
  dayRunning: number = 0;
  averageScore: number = 0;
  constructor() {}

  ngOnInit() {
    if (localStorage.getItem('totalScore') === null) this.totalScore = 0;
    else this.totalScore = parseInt(localStorage.getItem('totalScore'));
    this.getDayRunning();
    this.averageScore = Math.round(this.totalScore / this.dayRunning);
  }

  getDayRunning() {
    let startDay = parseInt(localStorage.getItem('startDate'));
    let today = Math.floor(new Date().getTime() / 1000 / 86400);
    this.dayRunning = today - startDay + 1;
  }
}
