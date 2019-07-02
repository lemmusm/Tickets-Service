import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/models/rol';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/providers/api.service';
import { AlertaService } from 'src/app/providers/alerta.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styles: []
})
export class RolesComponent implements OnInit {
  rol: Rol = {};
  roles: Rol;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  message: any;

  constructor(
    private apiservice: ApiService,
    private alerta: AlertaService) { }

  ngOnInit() {
    this.mostrarRoles();
  }

  mostrarRoles() {
    this.dtOptions = { pagingType: 'full_numbers', pageLength: 10 };
    this.apiservice.getRoles()
      .subscribe(
        (response: any) => {
          this.roles = response;
          this.dtTrigger.next();
        },
        (err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.name);
          console.log(err.message);
          console.log(err.status);
        }
      );
  }

  agregarRol() {
    this.apiservice.addRol(this.rol)
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

  eliminarRol(id: number) {
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
        this.apiservice.deleteRol(id).subscribe(
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
    $('#listadoRoles')
      .DataTable()
      .destroy();
    this.mostrarRoles();
  }
}
