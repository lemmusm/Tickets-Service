import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/providers/api.service';
import { AlertaService } from 'src/app/providers/alerta.service';
import { Departamento } from 'src/app/models/departamento';

@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styles: []
})
export class EditarDepartamentoComponent implements OnInit {

  id = this.aroute.snapshot.paramMap.get('id');
  departamento: Departamento = {};
  message: any;
  ubicaciones = this.apiservice.ubicaciones;

  constructor(public router: Router, private aroute: ActivatedRoute, private apiservice: ApiService, private alerta: AlertaService) { }

  ngOnInit() {
    this.getDepartamentoByID();
  }

  getDepartamentoByID() {
    this.apiservice.getDepartamentoByID(this.id)
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

  updateDepartamento() {
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
            this.router.navigate(['/listado-departamentos']);
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
