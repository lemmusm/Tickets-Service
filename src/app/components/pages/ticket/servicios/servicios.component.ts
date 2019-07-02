import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Servicio } from 'src/app/models/servicio';
import { ApiService } from 'src/app/providers/api.service';
import { AlertaService } from 'src/app/providers/alerta.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styles: []
})
export class ServiciosComponent implements OnInit {
  servicio: Servicio = {};
  servicios: Servicio;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  message: any;

  constructor(
    private apiservice: ApiService,
    private alerta: AlertaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.mostrarServicios();
  }

  mostrarServicios() {
    this.dtOptions = { pagingType: 'full_numbers', pageLength: 10 };
    this.apiservice.getServicios()
      .subscribe(
        (response: any) => {
          this.servicios = response;
          this.dtTrigger.next();
        }
      );
  }

  agregarServicio() {
    this.apiservice.addServicio(this.servicio)
      .subscribe(
        (response: any) => {
          this.message = response;
          this.alerta.toastNotification(
            this.message.message,
            '',
            'green',
            'far fa-check-circle'
          );
          this.recargaDataTable();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.alerta.toastNotification(
            error.name + ' ' + error.status,
            '',
            'red',
            'fas fa-times'
          );
        }
      );
  }

  eliminarServicio(id: number) {
    Swal.fire({
      title: '¿Deseas eliminar el registro?',
      text: 'Será borrado de forma permanente',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#88D2F7',
      cancelButtonColor: '#FC9297',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.apiservice.deleteServicio(id).subscribe(
          response => {
            this.message = response;
            this.alerta.toastNotification(
              this.message.message,
              '',
              'yellow',
              'far fa-check-circle'
            );
            this.recargaDataTable();
          },
          error => {
            this.alerta.toastNotification(
              error.name + ' ' + error.status,
              '',
              'red',
              'fas fa-times'
            );
          }
        );
      }
    });
  }

  recargaDataTable() {
    $('#listadoServicios')
      .DataTable()
      .destroy();
    this.mostrarServicios();
  }
}
