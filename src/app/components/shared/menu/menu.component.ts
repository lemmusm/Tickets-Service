import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { AuthService } from 'src/app/providers/auth.service';
import { Router } from '@angular/router';
import { AlertaService } from 'src/app/providers/alerta.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  constructor(private apiservice: ApiService, public authservice: AuthService, private router: Router, public alerta: AlertaService) { }

  ngOnInit() {
  }

  // Comprobar si el usuario no ha actualizado su perfil por primera vez, si es así solicita actualizar
  actualizarUsuario() {
    this.apiservice.getFilterUser(this.authservice.usuario.uid)
      .subscribe(
        (response: any) => {
          if (response.departamento_id === 2) {
            // this.router.navigate(['editarUsuario/:id']);
            this.router.navigate(['editar-usuario/' + this.authservice.usuario.uid]);
            this.alerta.toastNotification(
              'Actualiza el departamento o área al que perteneces.',
              '',
              'blue',
              'fas fa-info-circle'
            );
          } else {
            this.router.navigate(['/crear-ticket']);
          }
        },
        error => {
          console.log(error);
        }
      );
  }
}
