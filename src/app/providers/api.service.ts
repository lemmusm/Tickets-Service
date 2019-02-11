import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Departamento } from '../models/departamento';
import { Ticket } from '../models/ticket';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
// URL API
  API_URL = 'http://webapiuppe/';
// Arreglo de ubicaciones
  ubicaciones = [
    {id: 1, ubicacion: 'UD-1'},
    {id: 2, ubicacion: 'UD-2'},
    {id: 3, ubicacion: 'LT-1'},
    {id: 4, ubicacion: 'UA-1'},
    {id: 5, ubicacion: 'GENERAL'}
  ];
// Arreglo de los status
  estados = [
    {id: 1, status: 'Abierto'},
    {id: 2, status: 'Realizado'},
    {id: 3, status: 'N/A'}
  ];
// Arreglo de servicios
  servicios = [
    {id: 1, servicio: 'Mantenimiento preventivo'},
    {id: 2, servicio: 'Mantenimiento correctivo'},
    {id: 3, servicio: 'Instalación de software'},
    {id: 4, servicio: 'Servicios de red/internet'},
    {id: 5, servicio: 'Plataforma de correo electrónico'},
    {id: 6, servicio: 'Sitio web institucional'},
    {id: 7, servicio: 'Otros'},
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
    return this.http.delete<Departamento>(`${this.API_URL}api/departamentos/` + id);
  }
// SOLICITUDES
  // Enviar y crea nuevo ticket
  postTicket(ticket: any): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.API_URL}api/tickets`, ticket);
  }
  // Trae todas las solicitudes
  getTickets(): Observable<Ticket> {
   return this.http.get<Ticket>(`${this.API_URL}api/tickets`);
  }
  // Trae el ticket seleccionado por el id
  getTicketByID(id: string) {
    return this.http.get(`${this.API_URL}api/tickets/` + id);
  }
  // Actualiza el ticket seleccionado
  updateTicket(id: string, ticket: any): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.API_URL}api/tickets/` + id, ticket);
  }
  // Borra ticket seleccionado
  deleteTicket(id: number): Observable<Ticket> {
    return this.http.delete<Ticket>(`${this.API_URL}api/tickets/` + id);
  }
  // Trae los ultimos 15 registros (tickets)
  getLastTickets() {
    return this.http.get(`${this.API_URL}api/lastTickets/filtertickets`);
  }

  // Graphs
  graphStatus() {
    return this.http.get(`${this.API_URL}api/graphs/gtickets`);
  }
  graphCountServicios() {
    return this.http.get(`${this.API_URL}api/graphs/gservicios`);
  }
  graphTicketsByDepartamentos() {
    return this.http.get(`${this.API_URL}api/graphs/gticketsareas`);
  }
  getTotalTickets() {
    return this.http.get(`${this.API_URL}api/graphs/totaltickets`);
  }
}
