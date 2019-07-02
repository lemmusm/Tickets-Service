import { Ubicacion } from './../../../../models/ubicacion';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { Router } from '@angular/router';
import { AlertaService } from 'src/app/providers/alerta.service';
import { Departamento } from 'src/app/models/departamento';

@Component({
  selector: 'app-agregardepartamento',
  templateUrl: './agregardepartamento.component.html',
  styles: []
})
export class AgregardepartamentoComponent implements OnInit {

  departamento: Departamento = {};
  message: any;
  ubicaciones: Ubicacion;
  constructor(public apiservice: ApiService, private router: Router, private alerta: AlertaService) { }

  ngOnInit() {
    this.mostrarUbicaciones();
  }
  // Agrega un nuevo departamento
  agregarDepartamento() {
    this.apiservice.addDepartamento(this.departamento)
      .subscribe(
        (response: any) => {
          this.message = response;
          this.alerta.toastNotification(
            this.message.message,
            '',
            'green',
            'far fa-check-circle'
          );
          this.router.navigate(['admin/listado-departamentos']);
        },
        error => {
          console.log(error);
          this.alerta.toastNotification(
            error.name,
            '',
            'red',
            'fas fa-times'
          );
        }
      );
  }
  // Trae las ubicaciones para usarlas en el SELECT
  mostrarUbicaciones() {
    this.apiservice.getUbicaciones()
      .subscribe(
        (response: any) => {
          this.ubicaciones = response;
        }
      );
  }
}
