import { Injectable } from '@angular/core';
// angularfire auth
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
// router
import { Router } from '@angular/router';
// map
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
import { AlertaService } from './alerta.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // interface usuario
  usuario: Usuario;
  // variables para almacenar datos de firebase
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  // variable para ocultar/mostrar navbar/footer
  active = false;
  admin = false;
  rol: any;
  // variable para almacenar numeros
  nums = '0123456789';

  constructor(private afauth: AngularFireAuth, private apiservice: ApiService, private router: Router, private alerta: AlertaService) {
    this.getUserFirebase();
  }

  // Método para la autenticación
  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    provider.setCustomParameters({ hd: 'uppenjamo.edu.mx' });
    this.afauth.auth.signInWithPopup(provider)
      .then(data => {
        this.router.navigate(['dashboard']);
      })
      .catch(error => {
        console.log(error);
      });
  }
  // Este método comprueba si es un alumno para cambiar de vista
  isAlumno() {
    this.email.slice(0, 9);
    if (this.email) {
      // algoritmmo que comprueba si la variable contiene numeros, si es así corresponde a un alumno y cierra sesión
      for (let i = 0; i < this.email.length; i++) {
        if (this.nums.indexOf(this.email.charAt(i), 0) !== -1) {
          this.signOut();
          this.router.navigate(['/login']);
          this.alerta.toastNotification(
            'Acceso denegado',
            'Aclaraciones: mhernandez@uppenjamo.edu.mx',
            'red',
            'fas fa-times'
          );
          return 1;
        }
      }
      return 0;
    }
  }
  // Método para el cierre de sesión
  signOut() {
    this.afauth.auth.signOut()
      .then(() => {
        this.router.navigate(['/login']);
        this.active = false;
      });
  }
  // Trae datos de firebase auth y verifica el estatus de la autenticacion y muestra/oculta componentes
  getUserFirebase() {
    this.afauth.authState.subscribe(
      auth => {
        if (auth) {
          this.uid = auth.uid;
          this.displayName = auth.displayName;
          this.email = auth.email;
          this.photoURL = auth.photoURL;
          // Se almacenan datos desde firebase
          this.isAlumno();
          // Se alamacena los datos de firebase en el modelo
          this.usuario = auth;
          // Muestra componentes navbar/footer cuando el usuario esta autenticado
          this.active = true;
          // Se obtiene el rol del usuario para usarlo en administrator()/rol.guard
          this.apiservice.getFilterUser(this.uid)
              .subscribe(
                response => {
                  this.rol = response.rol.rol;
                  if (this.rol === 'Administrador') {
                    this.admin = true;
                    this.router.navigate(['/admin/listado-tickets']);
                  } else {
                    this.admin = false;
                  }
                }
              );
        } else {
          this.displayName = '';
          this.email = '';
          this.photoURL = '';
          // Oculta componentes navbar/footer cuando el usuario no esta autenticado
          this.active = false;
        }
      }
    );
  }
  // Verifica si es administrador a través del rol.guard
  administrator() {
    if (this.rol === 'Administrador') {
      return true;
    } else {
      return false;
    }
  }
  // Verifica el estatus de la autenticacion y se usa con auth.guard
  authenticated(): any {
    return this.afauth.authState
      .pipe(
        map(auth => {
          if (auth == null) {
            this.router.navigate(['login']);
            // Oculta componentes navbar/footer cuando el usuario no esta autenticado
            this.active = false;
          }
          // Muestra componentes navbar/footer cuando el usuario esta autenticado
          this.active = true;
          return auth != null;
        })
      );
  }
}
