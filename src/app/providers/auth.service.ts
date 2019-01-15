import { Injectable } from '@angular/core';
// angularfire auth
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
// router
import { Router } from '@angular/router';
// map
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // interface usuario
  usuario = new Usuario(); 
  // variables para almacenar datos de firebase
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  // variable para ocultar/mostrar navbar/footer
  login = false;

  constructor(private afauth: AngularFireAuth, private router: Router) {
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

  // Método para el cierre de sesión
  signOut() {
    this.afauth.auth.signOut()
      .then(() => {
        this.router.navigate(['login']);
      });
  }

  // Trae datos de firebase auth y verifica el estatus de la autenticacion y muestra/oculta componentes
  getUserFirebase() {
    this.afauth.authState.subscribe(
      auth => {
        // Se almacenan datos desde firebase
        this.displayName = auth.displayName;
        this.email = auth.email;
        this.photoURL = auth.photoURL;
        // Se alamacena los datos de firebase en el modelo
        this.usuario = auth;

        if (auth) {
          // Muestra componentes navbar/footer cuando el usuario esta autenticado
          this.login = true;
        } else {
          // Oculta componentes navbar/footer cuando el usuario no esta autenticado
          this.login = false;
        }
      }
    );
  }

  // Verifica el estatus de la autenticacion y se usa con GuardService
  isAuth() {
    return this.afauth.authState
      .pipe(
        map(auth => {
          if (auth == null) {
            this.router.navigate(['login']);
          }
          return auth != null;
        })
      );
  }
}
