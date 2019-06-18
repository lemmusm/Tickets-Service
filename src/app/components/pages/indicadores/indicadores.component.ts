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
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styles: []
})
export class IndicadoresComponent implements OnInit {
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
  dynamicColors = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const a = .75;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };
  // end random color
  constructor(private apiservice: ApiService, private datePipe: DatePipe) { }

  ngOnInit() { }
  // Trae datos de estatus por rango de fechas
  mostrarIndicadores() {
    this.indicador = 0;
    this.total = 0;
    // Obtiene la fecha del formulario, cambia formato y agrega horario
    this.dates.dateFrom =
      this.datePipe.transform(this.dateFrom, 'yyyy-MM-dd') + ' 00.00.00';
    this.dates.dateTo =
      this.datePipe.transform(this.dateTo, 'yyyy-MM-dd') + ' 23.59.59';

    this.apiservice
      .getIndicadores(this.dates.dateFrom, this.dates.dateTo)
      .subscribe((response: any) => {
        this.gstatusdates = response;
        this.graphstatusdates = response;
        const labels = this.graphstatusdates.map(x => x.status);
        const count: any = this.graphstatusdates.map((x: any) => x.count);
        /*
        // Algoritmo para obtener los indicadores ISO
        */
        for (let i = 0; i < count.length; i++) {
          this.total += count[i]; // Se obtiene el número total de items
        }
        /*
          Regla de tres: El total es 100%, entonces lo realizado cuanto es?
          -> count [0] es la posición del arreglo [realizado (0), abierto (1), en proceso (2)]
          en este caso se hace el conteo de lo realizado por count[0]
        */
        this.indicador = (count[0] * 100) / this.total; // realizados * 100 % total
        // Aplicar color random
        // tslint:disable-next-line:forin
        for (const i in count) {
          this.colorR.push(this.dynamicColors());
        }
        this.chartStatusDates = new Chart('chartStatusDates', {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [
              {
                data: count,
                backgroundColor: this.colorR,
                borderColor: 'white',
                borderDash: [1],
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: true
            },
            title: {
              display: true
            },
            scales: {
              xAxes: [
                {
                  display: false
                }
              ],
              yAxes: [
                {
                  display: false,
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
