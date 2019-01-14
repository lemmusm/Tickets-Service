import { Injectable } from '@angular/core';
// angularfire auth
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
// router
import { Router } from '@angular/router';
// map
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth, private router: Router) { }

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    provider.setCustomParameters({ hd: 'uppenjamo.edu.mx'});

    this.afauth.auth.signInWithPopup(provider)
        .then( data => {
          this.router.navigate(['dashboard']);
        })
        .catch( error => {
          console.log(error);
        });
  }

  signOut() {
    this.afauth.auth.signOut()
        .then( () => {
          this.router.navigate(['login']);
        });
  }
}
