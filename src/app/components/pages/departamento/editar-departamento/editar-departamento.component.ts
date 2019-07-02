import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/providers/api.service';
import { AlertaService } from 'src/app/providers/alerta.service';
import { Departamento } from 'src/app/models/departamento';
import { Ubicacion } from 'src/app/models/ubicacion';

@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styles: []
})
export class EditarDepartamentoComponent implements OnInit {

  id = this.aroute.snapshot.paramMap.get('id');
  departamento: Departamento = {};
  ubicaciones: Ubicacion;
  message: any;

  constructor(
    public router: Router,
    private aroute: ActivatedRoute,
    private apiservice: ApiService,
    private alerta: AlertaService
  ) { }

  ngOnInit() {
    this.mostrarDepartamento();
    this.mostrarUbicaciones();
  }

  mostrarDepartamento() {
    this.apiservice.getDepartamento(this.id)
      .subscribe(
        (response: any) => {
          this.departamento = response;
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

  mostrarUbicaciones() {
    this.apiservice.getUbicaciones()
      .subscribe(
        (response: any) => {
          this.ubicaciones = response;
        }
      );
  }
  actualizarDepartamento() {
    this.apiservice.updateDepartamento(this.id, this.departamento)
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
          this.alerta.toastNotification(
            error.name,
            '',
            'red',
            'fas fa-times'
          );
        }
      );
  }
}
