import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { AuthService } from 'src/app/providers/auth.service';
import { Subject } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  fecha = new Date();
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  usuario: Usuario = {
    departamento: {}
  };
  id = this.authservice.usuario.uid;

  constructor(
    public authservice: AuthService,
    private apiservice: ApiService
  ) {}

  ngOnInit() {
    this.verifyAndSaveUser();
    this.getTicketsByUsuario();
  }

  /* Consulta UID en la base de datos local y compará con el de firebase,
  // si existe omite el guardado si no lo guarda en la base de datos local
  */
  verifyAndSaveUser() {
    this.apiservice
      .getUsuarioByUID(this.authservice.usuario.uid)
      .subscribe((response: any) => {
        if (response.uid === undefined) {
          this.postUsuario(); // llamada al método post para guardar
        } else {
          console.log('🎯👍');
        }
        /* Algoritmo para actualizar el nombre en la base de datos cuando el correo
        // electrónico es reasignado.
        */
        if (response.displayName !== this.authservice.usuario.displayName) {
          this.apiservice
            .updateDisplayNameAndPhotoURL(
              this.authservice.uid,
              this.authservice.usuario
            )
            .subscribe(
              res => {
                // console.log(res);
              },
              error => {
                // console.log(error);
              }
            );
        }
      });
  }
  // Trae datos del usuario
  getTicketsByUsuario() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      order: [0, 'desc'],
      pageLength: 5,
      lengthMenu: [5, 10, 15]
    };
    this.apiservice.getUsuarioByUID(this.id).subscribe((response: any) => {
      this.usuario = response;
      this.dtTrigger.next();
    });
  }
  // Guarda usuario en la base de datos
  postUsuario() {
    this.apiservice.postUsuario(this.authservice.usuario).subscribe(
      response => {
        console.log('🚀💾 💌');
      },
      error => {
        console.log('💢');
      }
    );
  }
}
