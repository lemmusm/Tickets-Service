import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { ApiService } from 'src/app/providers/api.service';
import { AlertaService } from 'src/app/providers/alerta.service';
import { AuthService } from 'src/app/providers/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-ticket',
  templateUrl: './crear-ticket.component.html',
  styles: []
})
export class CrearTicketComponent implements OnInit {
  // Se crea objeto de tipo ticket y se inicializa
  ticket: Ticket = {};
  // se crea objeto de tipo Usuario y a su vez el objeto departartamento y ambos se inicializan
  usuario: Usuario = {
    departamento: {}
  };
  message: any; // variable creada para almacenar la respuesta del servidor
  fecha = new Date(); // variable que almacena la fecha actual
  id = this.authservice.uid; // Se almacena el uid de los datos de firebase
  servicios = this.apiservice.servicios; // Guarda el arreglo de los servicios

  constructor(
    private apiservice: ApiService,
    private router: Router,
    public authservice: AuthService,
    private alerta: AlertaService
  ) {}

  ngOnInit() {
    this.getDataById();
  }

  // Traer datos de la base de datos de acuerdo al id y los datos son usados para los campos nombre, email y departamento
  getDataById() {
    this.apiservice.getUsuarioByUID(this.id).subscribe((response: any) => {
      this.usuario = response;
    });
    this.ticket.usuario_uid = this.authservice.uid; // Se almacena el uid de los datos de firebase para usarlo como huella digital
  }
  // Método para agregra solicitud
  addTicket() {
    this.apiservice.postTicket(this.ticket).subscribe(
      (response: any) => {
        this.message = response;
        this.alerta.toastNotification(
          'Tu solicitud ha sido creada, será analizada y atendida.',
          '',
          'green',
          'fas fa-check-circle'
        );
        this.router.navigate(['dashboard']);
      },
      error => {
        this.alerta.toastNotification(error.name, '', 'red', 'fas fa-times');
      }
    );
  }
}
