import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/providers/api.service';
import { Usuario } from 'src/app/models/usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styles: []
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.getUsuarios();
  }
// Trae los usuarios y los enlista en una datatable
  getUsuarios() {
    this.dtOptions = { pagingType: 'full_numbers', pageLength: 10 };
    this.apiservice.getUsuarios()
        .subscribe(
          (response: Usuario) => {
            this.usuarios = response;
            this.dtTrigger.next();
          }
        );
  }
// Elimina usuario seleccionado
  deleteUsuario(uid: string) {
    this.apiservice.deleteUsuario(uid)
        .subscribe(
          response => {
            this.recargaDataTable();
          },
          error => {
            console.log(error);
          }
        );
  }
// Recarga la tabla despues de que se borra el usuario
  recargaDataTable() {
    $('#listadoUsuarios').DataTable().destroy();
    this.getUsuarios();
  }
}
