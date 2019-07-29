import { Injectable, NgZone } from '@angular/core';
// angularfire auth
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
// router
import { Router } from '@angular/router';
// map
import { map } from 'rxjs/operators';
import { AlertaService } from './alerta.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // variables para almacenar datos de firebase
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  usuarioLocal: any;
  // variable para ocultar/mostrar navbar/footer
  active = false;
  admin = false;
  rol = 'Regular';
  // variable para almacenar numeros
  nums = '0123456789';

  constructor(private afauth: AngularFireAuth, private apiservice: ApiService, private router: Router, private alerta: AlertaService, private ngZone: NgZone) {
    this.getUserFirebase();
  }

  // Método para la autenticación
  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    provider.setCustomParameters({ hd: 'uppenjamo.edu.mx' });
    this.afauth.auth.signInWithPopup(provider)
      .then(data => {
        this.ngZone.run(() => this.router.navigate(['dashboard'])).then();
        this.admin = false;
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
          this.router.navigate(['login']);
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
        this.active = false;
        this.router.navigate(['login']);
      });
  }
  // Trae datos de firebase auth y verifica el estatus de la autenticacion y muestra/oculta componentes
  getUserFirebase() {
    this.afauth.authState.subscribe(
      auth => {
        if (auth) {
          // Se alamacena los datos de firebase en las variables
          this.uid = auth.uid;
          this.displayName = auth.displayName;
          this.email = auth.email;
          this.photoURL = auth.photoURL;
          // Se almacenan datos desde firebase
          this.isAlumno();
          // Muestra componentes navbar/footer cuando el usuario esta autenticado
          this.active = true;
          this.guardaUsuarioEnBD(); // Guarda nuevo usuario
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
  /*
  Guardausuario de firebase en la base de datos, si es completado o hay error, a tarvés de
  la consola manda un mensaje.
*/
  guardaUsuarioEnBD() {
    let uid: any;
    this.apiservice.getFilterUser(this.uid)
      .pipe(
        map(x => x.uid)
      )
      .subscribe(
        (res: any) => {
          uid = res;
          switch (uid) {
            case undefined:
              const user = {
                uid: this.uid,
                departamento_id: 2,
                displayName: this.displayName,
                photoURL: this.photoURL,
                email: this.email,
                rol_id: 2
              };
              this.apiservice.saveUsuario(user).subscribe(
                (response: any) => {
                  console.log(response.message);
                },
                error => {
                  console.error(error);
                }
              );
              break;
            case this.uid:
              this.verificaUsuarioEnDB();
              break;
          }
        }
      );
  }
  /*
    Consulta UID en la base de datos local y compará con el de firebase,
    si existe omite el guardado de lo contrario lo guarda en la base de datos local.
    Verifica si el uid de la base de datos es igual a undefined/vacio, es decir,
    si el usuario no ha sido registrado en la base de datos llama al método saveUsuario() para guardarlo,
    en caso de estar guardado manda mensaje en consola (👍).
    Enseguida mediante una sentencia if se comprueba que el nombre/avatar de la base de datos
    y firebase sea igual, de lo contrario actualiza los datos local, debido a que los algunos correos
    institucionales del personal son reasignables por el movimiento de puestos.
  */
  verificaUsuarioEnDB() {
    this.apiservice
      .getFilterUser(this.uid)
      .subscribe(
        (response: any) => {
          /*
            if-else if - else donde si no existe el usuario en la base de datos se guarda un nuevo
            registro con datos de firebase y si la fotografia o nombre han sido cambiados en api_firebase(correo)
            se actualizan en la base de datos y si el departamento_id/rol_id son nulos se actualiza al usuario,
            de lo contrario el usuario esta guardado y se comprueba si es o no administrador.
          */
          this.usuarioLocal = response;
          this.rol = this.usuarioLocal.rol.rol;
          if (this.usuarioLocal.photoURL !== this.photoURL || this.usuarioLocal.displayName !== this.displayName) {
            const user = {
              uid: this.uid,
              departamento_id: this.usuarioLocal.departamento_id,
              displayName: this.displayName,
              photoURL: this.photoURL,
              email: this.email,
              rol_id: this.usuarioLocal.rol_id
            };
            this.apiservice.updateUsuario(this.uid, user).subscribe();
            console.log('::name_picture:📷');
          } else if (this.usuarioLocal.departamento_id === null || this.usuarioLocal.rol_id === null) {
            const user = {
              uid: this.uid,
              departamento_id: 2,
              displayName: this.displayName,
              photoURL: this.photoURL,
              email: this.email,
              rol_id: 2
            };
            this.apiservice.updateUsuario(this.uid, user).subscribe();
            console.log('::profile::👷');
          } else {
            console.log('::ok::👍');
          }
          this.isAdmin();
        });
  }
  /*
   Comprueba el valor de rol y define si es administrador o usuario regular
  */
  isAdmin() {
    switch (this.rol) {
      case 'Administrador':
        this.admin = true;
        this.router.navigate(['/admin/listado-tickets']);
        console.log('::admin::👽');
        break;
      default:
        this.admin = false;
        console.log('::user::👤');
        break;
    }
  }
  /*
   Verifica si es administrador a través del rol.guard
  */
  administrator() {
    if (this.rol === 'Administrador') {
      return true;
    } else {
      return false;
    }
  }
  /*
   Verifica el estatus de la autenticacion y se usa con auth.guard
  */
  authenticated(): any {
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
