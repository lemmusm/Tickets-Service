import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/providers/auth.service';
import { ApiService } from 'src/app/providers/api.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styles: []
})
export class HistorialComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // Se crea objeto Usuario y a su vez dentro los objetos departamento y tickets y se inicializan
  usuario: Usuario = {
    departamento: {}
  };
  id = this.authservice.usuario.uid; // Almacena el uid de firebase

  constructor(
    private authservice: AuthService,
    private apiservice: ApiService
  ) { }

  ngOnInit() {
    this.getTicketsByUsuario();
  }

  getTicketsByUsuario() {
    this.dtOptions = { pagingType: 'full_numbers', order: [0, 'desc'], pageLength: 5, lengthMenu: [5, 10, 15]};
    this.apiservice.getUsuarioByUID(this.id)
        .subscribe(
          (response: any) => {
            this.usuario = response;
            this.dtTrigger.next();
          }
        );
  }

}
