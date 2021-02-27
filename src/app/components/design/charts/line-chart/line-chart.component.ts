import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: '' },
  ];

  lineChartLabels: Label[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];

  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#4CC2B0',
      backgroundColor: "#B7E7DF",
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';

}
