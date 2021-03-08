import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatePipe, Time } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  devs: string[];
  yearDev: string;
  today: number = Date.now();
  constructor() { }

  ngOnInit(): void {
    this.devs = environment.devs;
    this.yearDev = environment.yearDev;
  }

}
