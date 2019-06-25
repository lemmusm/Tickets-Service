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
    this.verificaUsuario();
    this.mostrarTicketsDelUsuario();
  }

/*
  Consulta UID en la base de datos local y compará con el de firebase,
  si existe omite el guardado de lo contrario lo guarda en la base de datos local.
  Verifica si el uid de la base de datos es igual a undefined/vacio, es decir,
  si el usuario no ha sido registrado en la base de datos llama al método saveUsuario() para guardarlo,
  en caso de estar guardado manda mensaje en consola (🎯👍).
  Enseguida mediante una sentencia if se comprueba que el nombre/avatar de la base de datos
  y firebase sea igual, de lo contrario actualiza los datos local, debido a que los algunos correos
  institucionales del personal son reasignables por el movimiento de puestos.
*/
  verificaUsuario() {
    this.apiservice
      .getFilterUser(this.authservice.uid)
      .subscribe((response: any) => {
        if (response.uid === undefined) {
          this.guardaUsuarioEnBD(); // llamada al método post para guardar usuario
        } else {
          console.log('🎯👍');
        }

/*
// Algoritmo para actualizar el nombre del usuario en la base de datos cuando el correo
// electrónico es reasignado, datos traidos desde firebase.
*/
        if (response.displayName !== this.authservice.displayName) {
          this.apiservice
            .updateUsuario(
              // Envia como parametros el id y datos del usuario
              this.authservice.uid,
              this.authservice.usuario
            )
            .subscribe();
        }
      });
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
/*
  Guardausuario de firebase en la base de datos, si es completado o hay error, a tarvés de
  la consola manda un mensaje.
*/
  guardaUsuarioEnBD() {
    this.apiservice.saveUsuario(this.authservice.usuario).subscribe(
      response => {
        console.log('🚀💾 💌');
      },
      error => {
        console.log('💢');
      }
    );
  }
}
