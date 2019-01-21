import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { AuthService } from 'src/app/providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  constructor(private apiservice: ApiService, private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }

  // Comprobar si el usuario no ha actualizado su perfil por primera vez, si es así solicita actualizar
  verifyUpdatePerfil() {
    this.apiservice.getUsuarioByUID(this.authservice.usuario.uid)
        .subscribe(
          (response: any) => {
            if (response.departamento_id === 2) {
              // this.router.navigate(['editarUsuario/:id']);
              this.router.navigate(['editarUsuario/' + this.authservice.usuario.uid]);
            } else {
              console.log('Estas actualizado!');
            }
          },
          error => {
            console.log(error);
          }
        );
  }
}
