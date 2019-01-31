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
  ubicaciones = this.apiservice.ubicaciones;
  constructor(public apiservice: ApiService, private router: Router, private alerta: AlertaService) { }

  ngOnInit() {
  }

  addDepartamento() {
    console.log(this.departamento);
    this.apiservice.postDepartamento(this.departamento)
        .subscribe(
          (response: any) => {
            this.message = response;
            this.alerta.toastNotification(
              this.message.message,
              '',
              'green',
              'far fa-check-circle'
            );
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
}
