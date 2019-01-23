import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { Observable } from 'rxjs';
import { Departamento } from 'src/app/models/departamento';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styles: []
})
export class EditarUsuarioComponent implements OnInit {

  uid = this.aroute.snapshot.paramMap.get('id');
  usuario: Usuario = {};
  departamentos: Departamento;

  constructor(public router: Router, private aroute: ActivatedRoute, private apiservice: ApiService) { }

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

  updateUsuario() {
    this.apiservice.updateUsuario(this.uid, this.usuario)
        .subscribe(
          (response: any) => {
            console.log(response);
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
