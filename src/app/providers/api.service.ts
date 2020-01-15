import { Servicio } from "src/app/models/servicio";
import { Ubicacion } from "./../models/ubicacion";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";
import { Departamento } from "../models/departamento";
import { Ticket } from "../models/ticket";
import { Rol } from "../models/rol";
@Injectable({
  providedIn: "root"
})
export class ApiService {
  // URL API
  API_URL = "https://yourendpoint/";
  // Arreglo de los status
  estados = [
    { id: 1, status: "Abierto" },
    { id: 2, status: "Realizado" },
    { id: 3, status: "N/A" },
    { id: 4, status: "En proceso" }
  ];

  constructor(private http: HttpClient) {}

  // USUARIOS
  // Trae todos los usuarios registrados
  getUsuarios(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API_URL}api/usuarios`);
  }
  /*
    Trae datos filtrados del usuario (uid, displayName, email, photoURL)
    con información filtrada de Tickets ()
  */
  getCompleteUser(uid: string): Observable<Usuario> {
    return this.http.get<Usuario>(
      `${this.API_URL}api/usuarios/getCompleteUser/` + uid
    );
  }
  // Trae usuario por el uid con toda la informacion (tickets, departamento, rol)
  getFilterUser(uid: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API_URL}api/usuarios/` + uid);
  }
  // Enviar y crea nuevo usuario
  saveUsuario(usuario: any): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API_URL}api/usuarios`, usuario);
  }
  // Actualiza usuario seleccionado en caso de cambios
  updateUsuario(uid: string, usuario: any): Observable<Usuario> {
    return this.http.put<Usuario>(
      `${this.API_URL}api/usuarios/` + uid,
      usuario
    );
  }
  // Borra usuario seleccionado
  deleteUsuario(uid: string): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.API_URL}api/usuarios/` + uid);
  }

  // DEPARTAMENTOS
  // Trae todos los departamentos
  getDepartamentos(): Observable<Departamento> {
    return this.http.get<Departamento>(`${this.API_URL}api/departamentos`);
  }
  // Trae todos los departamentos con informacion extra
  getCompleteDepartamentos(): Observable<Departamento> {
    return this.http.get<Departamento>(
      `${this.API_URL}api/completeDepartamentos`
    );
  }
  // Trae el departamento seleccionado por el id
  getDepartamento(id: string): Observable<Departamento> {
    return this.http.get<Departamento>(
      `${this.API_URL}api/departamentos/` + id
    );
  }
  // Envia nuevo registro
  addDepartamento(departamento: any): Observable<Departamento> {
    return this.http.post<Departamento>(
      `${this.API_URL}api/departamentos`,
      departamento
    );
  }
  // Actualiza departamento seleccionado
  updateDepartamento(id: string, departamento: any): Observable<Departamento> {
    return this.http.put<Departamento>(
      `${this.API_URL}api/departamentos/` + id,
      departamento
    );
  }
  // Borra departamento seleccionado
  deleteDepartamento(id: number): Observable<Departamento> {
    return this.http.delete<Departamento>(
      `${this.API_URL}api/departamentos/` + id
    );
  }
  // SOLICITUDES/TICKETS
  // Trae el ticket seleccionado por el id
  getTicket(id: string) {
    return this.http.get(`${this.API_URL}api/tickets/` + id);
  }
  // Trae todas las solicitudes
  getTickets(): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.API_URL}api/tickets`);
  }
  // Enviar y crea nuevo ticket
  saveSolicitud(ticket: any): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.API_URL}api/tickets`, ticket);
  }
  // Actualiza el ticket seleccionado
  updateTicket(id: string, ticket: any): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.API_URL}api/tickets/` + id, ticket);
  }
  // Borra ticket seleccionado
  deleteTicket(id: number): Observable<Ticket> {
    return this.http.delete<Ticket>(`${this.API_URL}api/tickets/` + id);
  }
  // Trae los ultimos 15 registros (tickets) usado en
  getLastTickets() {
    return this.http.get(`${this.API_URL}api/lastTickets/filtertickets`);
  }

  // SEND FILES
  sendFile(formData: any) {
    return this.http.post(`${this.API_URL}api/ticket/file`, formData);
  }
  // ROLES
  getRoles(): Observable<Rol> {
    return this.http.get<Rol>(`${this.API_URL}api/roles`);
  }
  getRol(id: string): Observable<Rol> {
    return this.http.get<Rol>(`${this.API_URL}api/roles/` + id);
  }
  addRol(rol: any): Observable<Rol> {
    return this.http.post<Rol>(`${this.API_URL}api/roles`, rol);
  }
  updateRol(id: string, rol: any): Observable<Rol> {
    return this.http.put<Rol>(`${this.API_URL}api/roles/` + id, rol);
  }
  deleteRol(id: number): Observable<Rol> {
    return this.http.delete<Rol>(`${this.API_URL}api/roles/` + id);
  }
  // UBICACIONES
  getUbicaciones(): Observable<Ubicacion> {
    return this.http.get<Ubicacion>(`${this.API_URL}api/ubicaciones`);
  }
  getUbicacion(id: string): Observable<Ubicacion> {
    return this.http.get<Ubicacion>(`${this.API_URL}api/ubicaciones/` + id);
  }
  addUbicacion(ubicacion: any): Observable<Ubicacion> {
    return this.http.post<Ubicacion>(
      `${this.API_URL}api/ubicaciones`,
      ubicacion
    );
  }
  updateUbicacion(id: string, ubicacion: any): Observable<Ubicacion> {
    return this.http.put<Ubicacion>(
      `${this.API_URL}api/ubicaciones/` + id,
      ubicacion
    );
  }
  deleteUbicacion(id: number): Observable<Ubicacion> {
    return this.http.delete<Ubicacion>(`${this.API_URL}api/ubicaciones/` + id);
  }
  // SERVICIOS
  getServicios(): Observable<Servicio> {
    return this.http.get<Servicio>(`${this.API_URL}api/servicios`);
  }
  getServicio(id: string): Observable<Servicio> {
    return this.http.get<Servicio>(`${this.API_URL}api/servicios/` + id);
  }
  addServicio(servicio: any): Observable<Servicio> {
    return this.http.post<Servicio>(`${this.API_URL}api/servicios`, servicio);
  }
  updateServicio(id: string, servicio: any): Observable<Servicio> {
    return this.http.put<Servicio>(
      `${this.API_URL}api/servicios/` + id,
      servicio
    );
  }
  deleteServicio(id: number): Observable<Servicio> {
    return this.http.delete<Servicio>(`${this.API_URL}api/servicios/` + id);
  }
  // GRÁFICAS
  // total tickets
  getTotalTickets() {
    return this.http.get(`${this.API_URL}api/estadisticas/totaltickets`);
  }
  // Graficar tickets
  getinfoTickets(parametro: string) {
    return this.http.get(
      `${this.API_URL}api/estadisticas/infoTickets` +
        "?" +
        "parametro=" +
        parametro
    );
  }
  // Get data by between range dates
  getIndicadores(dateFrom: string, dateTo: string) {
    return this.http.get(
      `${this.API_URL}api/estadisticas/indicadores` +
        "?" +
        "dateFrom=" +
        dateFrom +
        "&" +
        "dateTo=" +
        dateTo
    );
  }
}
