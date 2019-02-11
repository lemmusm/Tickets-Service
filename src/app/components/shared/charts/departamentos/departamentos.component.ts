import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiService } from 'src/app/providers/api.service';

export interface GraphDepartamentos {
  departamento: string;
  count: number;
}
@Component({
  selector: 'app-graphdepartamentos',
  templateUrl: './departamentos.component.html',
  styles: []
})
export class DepartamentosComponent implements OnInit {

  graphdepartamento: GraphDepartamentos[] = [];
  gsdepartamento: GraphDepartamentos;
  chartDepartamentos: any;
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
    this.graphCountTicketsbyDepartamento();
  }

  // Grafica para servicios
graphCountTicketsbyDepartamento() {
  this.apiservice.graphTicketsByDepartamentos()
    .subscribe(
      (response: any) => {
        this.gsdepartamento = response;
        this.graphdepartamento = response;
        const labels = this.graphdepartamento.map(x => x.departamento);
        const count = this.graphdepartamento.map((x: any) => x.count);
        // Aplicar color random
        // tslint:disable-next-line:forin
        for (const i in count) {
          this.colorR.push(this.dynamicColors());
        }
        this.chartDepartamentos = new Chart('chartDepartamentos', {
          type: 'horizontalBar',
          data: {
            labels: labels,
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
