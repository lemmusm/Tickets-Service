import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiService } from 'src/app/providers/api.service';

export interface GraphStatus {
  status: string;
  count: number;
}

@Component({
  selector: 'app-graphstatus',
  templateUrl: './status.component.html',
  styles: []
})
export class StatusComponent implements OnInit {
  graphstatus: GraphStatus[] = [];
  gstatus: GraphStatus;
  chartStatus: any;
  // generate random color
  colorR = [];
  dynamicColors = function() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };
  // end random color

  constructor(private apiservice: ApiService) {}

  ngOnInit() {
    this.graphCountStatus();
  }

  // Grafica para status
  graphCountStatus() {
    this.apiservice.graphStatus().subscribe((response: any) => {
      this.gstatus = response;
      this.graphstatus = response;
      const labels = this.graphstatus.map(x => x.status);
      const count = this.graphstatus.map((x: any) => x.count);
      // Aplicar color random
      // tslint:disable-next-line:forin
      for (const i in count) {
        this.colorR.push(this.dynamicColors());
      }
      this.chartStatus = new Chart('chartStatus', {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {
              data: count,
              backgroundColor: this.colorR
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          title: {
            display: true
          },
          scales: {
            xAxes: [
              {
                display: true
              }
            ],
            yAxes: [
              {
                display: true,
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    });
  }
}
