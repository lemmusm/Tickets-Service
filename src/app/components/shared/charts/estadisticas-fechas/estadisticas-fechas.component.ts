import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiService } from 'src/app/providers/api.service';
import { Chart } from 'chart.js';
// Array para manejar las fechas
export interface Date {
  dateFrom: any;
  dateTo: any;
}
// Array para graficar
export interface GraphStatus {
  status: string;
  count: number;
}
@Component({
  selector: 'app-estadisticas-fechas',
  templateUrl: './estadisticas-fechas.component.html',
  styles: []
})
export class EstadisticasFechasComponent implements OnInit {
  // variables para obtener total e indicador por periodo
  indicador = 0;
  total = 0;
  // variables para usar obtener la gráfica
  graphstatusdates: GraphStatus[] = [];
  gstatusdates: GraphStatus;
  chartStatusDates: any;
  // variables para obtener y convertir la fecha
  dateFrom: any;
  dateTo: any;
  dates: Date = {
    dateFrom: '',
    dateTo: ''
  };
  apiDateFrom: any;
  apiDateTo: any;
  // generate random color
  colorR = [];
  dynamicColors = function() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };
  // end random color
  constructor(private apiservice: ApiService, private datePipe: DatePipe) {}

  ngOnInit() {}
  // Trae datos de estatus por rango de fechas
  getDataByDates() {
    this.indicador = 0;
    this.total = 0;
    // Obtiene la fecha del formulario, cambia formato y agrega horario
    this.dates.dateFrom =
      this.datePipe.transform(this.dateFrom, 'yyyy-MM-dd') + ' 00.00.00';
    this.dates.dateTo =
      this.datePipe.transform(this.dateTo, 'yyyy-MM-dd') + ' 23.59.59';

    this.apiservice
      .getDates(this.dates.dateFrom, this.dates.dateTo)
      .subscribe((response: any) => {
        this.gstatusdates = response;
        this.graphstatusdates = response;
        const labels = this.graphstatusdates.map(x => x.status);
        const count: any = this.graphstatusdates.map((x: any) => x.count);
        // Obtener numero total de items
        for (let i = 0; i < count.length; i++) {
          this.total += count[i]; // Se obtiene el número total de items
        }
        /* Algoritmo para obtener indicadores por medio de la regla de tres total es 100%,
        entonces realizado cuanto es? */
        this.indicador = (count[0] * 100) / this.total; // realizados * 100 % total
        // Aplicar color random
        // tslint:disable-next-line:forin
        for (const i in count) {
          this.colorR.push(this.dynamicColors());
        }
        this.chartStatusDates = new Chart('chartStatusDates', {
          type: 'bar',
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
