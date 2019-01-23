import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  fecha = new Date();
  constructor(
    public authservice: AuthService,
    private apiservice: ApiService
  ) {}

  ngOnInit() {
    this.verifyAndSaveUser();
  }

// tslint:disable-next-line:max-line-length
// Consulta UID en la base de datos local y compará con el de firebase, si existe omite el guardado si no lo guarda en la base de datos local
  verifyAndSaveUser() {
    this.apiservice
      .getUsuarioByUID(this.authservice.usuario.uid)
      .subscribe((response: any) => {
        if (response.uid === undefined) {
          this.postUsuario(); // llamada al método post para guardar
        } else {
          console.log('🎯👍');
        }
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
