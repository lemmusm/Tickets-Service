import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { Chart } from 'chart.js';


export interface GraphServicios {
  servicio: string;
  count: number;
}

@Component({
  selector: 'app-graphservicios',
  templateUrl: './servicios.component.html',
  styles: []
})

export class ServiciosComponent implements OnInit {

  graphservicio: GraphServicios[] = [];
  gservicio: GraphServicios;
  chartServicios: any;
  // generate random color
  colorR = [];
  dynamicColors = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };
  // end random color
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.graphCountServicios();
  }

  // Grafica para servicios
graphCountServicios() {
  this.apiservice.graphCountServicios()
    .subscribe(
      (response: any) => {
        this.gservicio = response;
        this.graphservicio = response;
        const label = this.graphservicio.map(x => x.servicio);
        const count = this.graphservicio.map((x: any) => x.count);
        // Aplicar color random
        // tslint:disable-next-line:forin
        for (const i in count) {
          this.colorR.push(this.dynamicColors());
        }
        this.chartServicios = new Chart('chartServicios', {
          type: 'horizontalBar',
          data: {
            labels: label,
            datasets: [
              {
                data: count,
                backgroundColor: this.colorR,
                borderColor: 'transparent',
                borderDash: [1],
                pointBorderColor: '#e74c3c',
                pointBackgroundColor: '#e74c3c',
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            title: {
              display: true,
            },
            scales: {
              xAxes: [{
                display: true,
                ticks: {
                  beginAtZero: true
                }
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
      }
    );
}

}
