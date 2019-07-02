import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { ApiService } from 'src/app/providers/api.service';

export interface Parametro {
  id?: number;
  parametro?: string;
}
// Array para graficar
export interface Graph {
  parametro: string;
  count: number;
}
@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent {
  // variables para usar obtener la gráfica
  totalTickets: any;
  graph: Graph[] = [];
  gs: Graph;
  chartStatistics: any;
  parametro: Parametro = {};
  lista_parametros: any = [
    { id: 1, parametro: 'departamento' },
    { id: 2, parametro: 'servicio' },
    { id: 3, parametro: 'status' }
  ];

  constructor(private apiservice: ApiService) {}

  mostrarinfoTickets() {
    this.mostrarTotalTickets(); // muestra el total de solicitudes
    this.parametro.parametro = this.lista_parametros.parametro;
    this.apiservice.getinfoTickets(this.parametro.parametro)
      .subscribe(
        (response: any) => {
          this.graph = response;
          const labels = this.graph.map((x: any) => x.parametro);
          const count = this.graph.map((x: any) => x.count);
          // Resuleve problema al redibujar la grafica
          if (this.chartStatistics !== undefined) {
            this.chartStatistics.destroy();
          }
          // Dibuja la grafica
          this.chartStatistics = new Chart('chartStatistics', {
            type: 'radar',
            data: {
              labels: labels,
              datasets: [
                {
                  data: count,
                  backgroundColor: 'rgba(0, 184, 148,.75)',
                  borderColor: 'rgba(0, 184, 148,1.0)',
                  pointBorderColor: '#e74c3c',
                  pointBackgroundColor: '#e74c3c',
                  fill: true
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
                  display: false,
                  ticks: {
                    beginAtZero: true
                  }
                }],
                yAxes: [{
                  display: false
                }],
              }
            }
          });
        }
      );
  }

  mostrarTotalTickets() {
    this.apiservice.getTotalTickets().subscribe((response: any) => {
      this.totalTickets = response;
    });
  }
}
