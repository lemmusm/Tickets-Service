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

  nombre: any;
  email: any;
  urlavatar: any;
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
        if (auth) {
          this.nombre = auth.displayName;
          this.email = auth.email;
          this.urlavatar = auth.photoURL;
          // Muestra componentes navbar/footer cuando el usuario esta autenticado
          this.login = true;
        } else {
          this.nombre = '';
          this.email = '';
          this.urlavatar = '';
          // Oculta componentes navbar/footer cuando el usuario no esta autenticado
          this.login = false;
        }
      }
    );
  }
  // Verifica el estaus de la autenticacion y se usa con GuardService
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
