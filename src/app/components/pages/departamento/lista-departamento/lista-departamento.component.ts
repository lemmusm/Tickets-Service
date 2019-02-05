import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/providers/api.service';
import { Departamento } from 'src/app/models/departamento';
import { AlertaService } from 'src/app/providers/alerta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-departamento',
  templateUrl: './lista-departamento.component.html',
  styles: []
})
export class ListaDepartamentoComponent implements OnInit {

  departamentos: Departamento;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  message: any;

  constructor(private apiservice: ApiService, private alerta: AlertaService) { }

  ngOnInit() {
    this.getDepartamentos();
  }
// Trea los departamentos
  getDepartamentos() {
    this.dtOptions = { pagingType: 'full_numbers', pageLength: 10 };
    this.apiservice.getDepartamentos()
        .subscribe(
          (response: any) => {
            this.departamentos = response;
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
// Elimina el departamento seleccionado
  deleteDepartamento(id: number) {
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
        this.apiservice.deleteDepartamento(id)
        .subscribe(
          response => {
            this.message = response;
            this.alerta.toastNotification(
              this.message.message,
              '',
              'green',
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
    $('#listadoDepartamentos').DataTable().destroy();
    this.getDepartamentos();
    }
}
