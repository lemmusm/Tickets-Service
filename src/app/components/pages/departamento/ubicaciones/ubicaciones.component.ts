import { Component } from '@angular/core';
import { Ubicacion } from 'src/app/models/ubicacion';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/providers/api.service';
import { AlertaService } from 'src/app/providers/alerta.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html',
  styles: []
})
export class UbicacionesComponent {
  ubicacion: Ubicacion = {};
  ubicaciones: Ubicacion;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  message: any;

  constructor(private apiservice: ApiService, private alerta: AlertaService, private router: Router) {
    this.mostrarUbicaciones();
  }

  // Trea los departamentos
  mostrarUbicaciones() {
    this.dtOptions = { pagingType: 'full_numbers', pageLength: 10 };
    this.apiservice.getUbicaciones().subscribe(
      (response: any) => {
        this.ubicaciones = response;
        this.dtTrigger.next();
      },
      error => {
        this.alerta.toastNotification(error.name, '', 'red', 'fas fa-times');
      }
    );
  }
  // Agrega un nuevo ubicacion
  agregarUbicacion() {
    this.apiservice.addUbicacion(this.ubicacion)
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
          this.alerta.toastNotification(
            error.name + ' ' + error.status,
            '',
            'red',
            'fas fa-times'
          );
        }
      );
  }
  // Elimina el ubicacion seleccionado
  eliminarUbicacion(id: number) {
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
        this.apiservice.deleteUbicacion(id).subscribe(
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
              error.statusText,
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
    $('#listadoUbicaciones')
      .DataTable()
      .destroy();
    this.mostrarUbicaciones();
  }

}
