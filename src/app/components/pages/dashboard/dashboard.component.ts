import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { AuthService } from 'src/app/providers/auth.service';
import { Subject } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  usuario: Usuario = {}; // variable de tipo usuario para manejar los datos
  id = this.authservice.uid; // Guarda el uid de firebase en la variable

  constructor(
    public authservice: AuthService,
    private apiservice: ApiService
  ) { }

  ngOnInit() {
    this.mostrarTicketsDelUsuario();
  }
  /*
    Trae los datos (usuario/tickets) filtrados del usuario actual, de acuerdo al uid de firebase
    consulta los datos almacenados en local.
  */
  mostrarTicketsDelUsuario() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      order: [0, 'desc'],
      pageLength: 5,
      lengthMenu: [5, 10, 15]
    };
    this.apiservice.getCompleteUser(this.id).subscribe((response: any) => {
      this.usuario = response;
      this.dtTrigger.next();
    });
  }
}
