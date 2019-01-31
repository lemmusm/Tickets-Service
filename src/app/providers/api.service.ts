import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Departamento } from '../models/departamento';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://webapiuppe/';
  ubicaciones = [
    {id: 1, ubicacion: 'UD-1'},
    {id: 2, ubicacion: 'UD-2'},
    {id: 3, ubicacion: 'LT-1'},
    {id: 4, ubicacion: 'UA-1'},
    {id: 5, ubicacion: 'GENERAL'}
  ];

  constructor(private http: HttpClient) {
   }

// Usuarios
  // Trae todos los usuarios registrados
  getUsuarios(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API_URL}api/usuarios`);
  }
  // Trae usuario por el uid
  getUsuarioByUID(uid: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API_URL}api/usuarios/` + uid);
  }
  // Enviar y crea nuevo usuario
  postUsuario(usuario: any): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API_URL}api/usuarios`, usuario);
  }
  // Actualiza usuario seleccionado
  updateUsuario(uid: string, usuario: any): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.API_URL}api/usuarios/` + uid, usuario);
  }
  // Borra usuario seleccionado
  deleteUsuario(uid: string): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.API_URL}api/usuarios/` + uid);
  }

// DEPARTAMENTOS
  // Trae todos los departamentos registrados
  getDepartamentos(): Observable<Departamento> {
    return this.http.get<Departamento>(`${this.API_URL}api/departamentos`);
  }
  // Trae el departamento seleccionado por el id
  getDepartamentoByID(id: string): Observable<Departamento>  {
    return this.http.get<Departamento>(`${this.API_URL}api/departamentos/` + id);
  }
  // Envia nuevo registro
  postDepartamento(departamento: any): Observable<Departamento> {
    return this.http.post<Departamento>(`${this.API_URL}api/departamentos`, departamento);
  }
  // Actualiza departamento seleccionado
  updateDepartamento(id: string, departamento: any): Observable<Departamento> {
    return this.http.put<Departamento>(`${this.API_URL}api/departamentos/` + id, departamento);
  }
  // Borra departamento seleccionado
  deleteDepartamento(id: number): Observable<Departamento> {
    return this.http.delete(`${this.API_URL}api/departamentos/` + id);
  }
}
