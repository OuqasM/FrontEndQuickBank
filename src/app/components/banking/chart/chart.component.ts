import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private data1 : DataServiceService) {
    Chart.register(...registerables);
   }

  ngOnInit(): void {
    const myChart = new Chart("myChart", {
      type: 'line',
      data: this.data1.getData(),
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }


}
