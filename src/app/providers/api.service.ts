import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://webapiuppe/';

  constructor(private http: HttpClient) {
   }

// Usuarios
  // Trae todos los usuarios registrados
  getUsuarios() {
    return this.http.get(`${this.API_URL}api/usuarios`);
  }
  // Trae usuario por el uid
  getUsuarioByUID(uid: any) {
    return this.http.get(`${this.API_URL}api/usuarios/` + uid);
  }
  // Enviar y crea nuevo usuario 
  postUsuario(usuario: any) {
    return this.http.post(`${this.API_URL}api/usuarios`, usuario);
  }
  // Actualiza usuario seleccionado
  updateUsuario(uid: any, usuario: any) {
    return this.http.put(`${this.API_URL}api/usuarios` + uid, usuario);
  }
  // Borra usuario seleccionado
  deleteUsuario(uid: any) {
    return this.http.delete(`${this.API_URL}api/usuarios/` + uid);
  }

}
