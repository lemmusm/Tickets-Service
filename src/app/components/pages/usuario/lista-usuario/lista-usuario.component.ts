import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/providers/api.service';
import { Usuario } from 'src/app/models/usuario';
import { AlertaService } from 'src/app/providers/alerta.service';
// SweetAlert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styles: []
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  message: any;

  constructor(private apiservice: ApiService, private alerta: AlertaService) { }

  ngOnInit() {
    this.mostrarUsuarios();
  }
// Trae los usuarios y los enlista en una datatable
  mostrarUsuarios() {
    this.dtOptions = { pagingType: 'full_numbers', pageLength: 10 };
    this.apiservice.getUsuarios()
        .subscribe(
          (response: Usuario) => {
            this.usuarios = response;
            this.dtTrigger.next();
          },
          error => {
            this.alerta.toastNotification(
              error.name,
              '',
              'red',
              'fas fa-times'
            );
          }
        );
  }
// Elimina usuario seleccionado mediante un popup de confirmacion mostrando una alerta
  borrarUsuario(uid: string) {
    Swal.fire({
      title: '¿Deseas eliminar el registro?',
      text: 'Será borrado de forma permanente',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#88D2F7',
      cancelButtonColor: '#FC9297',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        this.apiservice.deleteUsuario(uid)
        .subscribe(
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
// Recarga la tabla despues de que se borra el usuario
  recargaDataTable() {
    $('#listadoUsuarios').DataTable().destroy();
    this.mostrarUsuarios();
  }
}
