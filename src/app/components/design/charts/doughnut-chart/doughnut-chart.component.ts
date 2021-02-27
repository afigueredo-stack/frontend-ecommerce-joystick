import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  public doughnutChartLabels = ['Produto 01', 'Produto 02', 'Produto 03', 'Produto 04'];
  public doughnutChartData = [120, 30, 90, 210];
  public doughnutChartType = 'doughnut';

  doughnutChartLegend = false;

  constructor() { }

  ngOnInit() {
  }

}
