import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { Departamento } from 'src/app/models/departamento';
import { AlertaService } from 'src/app/providers/alerta.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styles: []
})
export class EditarUsuarioComponent implements OnInit {

  uid = this.aroute.snapshot.paramMap.get('id');
  usuario: Usuario = {};
  departamentos: Departamento;
  msg: any;

  constructor(public router: Router, private aroute: ActivatedRoute, private apiservice: ApiService, private alerta: AlertaService) { }

  ngOnInit() {
    this.getusuarioByUid();
  }

// Trae datos de acuerdo al uid actual
  getusuarioByUid() {
    this.apiservice.getUsuarioByUID(this.uid)
      .subscribe(
        (response: any) => {
          this.usuario = response;
          this.getDepartamentos();
        },
        error => {
          console.log(error);
        }
      );
  }
// Actualiza usuario seleccionado
  updateUsuario() {
    this.apiservice.updateUsuario(this.uid, this.usuario)
      .subscribe(
        (response: any) => {
          this.msg = response;
          this.alerta.toastNotification(
            this.msg.message,
            '',
            'green',
            'far fa-check-circle'
          );
        }
      );
  }
// Trae los departamentos para usarlos dentro del select options
  getDepartamentos() {
    this.apiservice.getDepartamentos()
      .subscribe(
        (response: any) => {
          this.departamentos = response;
        }
      );
  }
}
