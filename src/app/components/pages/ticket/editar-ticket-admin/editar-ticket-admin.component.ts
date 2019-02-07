import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { ApiService } from 'src/app/providers/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertaService } from 'src/app/providers/alerta.service';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-editar-ticket-admin',
  templateUrl: './editar-ticket-admin.component.html',
  styles: []
})
export class EditarTicketAdminComponent implements OnInit {

  id = this.aroute.snapshot.paramMap.get('id');
  ticket: Ticket = {};
  message: any;
  estados = this.apiservice.estados;
  servicios = this.apiservice.servicios;

  constructor(
      private apiservice: ApiService,
      public authservice: AuthService,
      private router: Router,
      private aroute: ActivatedRoute,
      private alerta: AlertaService
    ) { }

  ngOnInit() {
    this.getTicketByID();
  }
// Trae los registros de los tickets almacenados en la base de datos
  getTicketByID() {
    this.apiservice.getTicketByID(this.id)
        .subscribe(
          (response: any) => {
            this.ticket = response;
            this.ticket.tecnico = this.authservice.usuario.displayName; // Almacena el nombre de Firebase para firmar como el técnico
          },
          error => {
            this.alerta.toastNotification(
              error.name,
              '',
              'red',
              'fas fa-times'
            );
          }
        );
  }
// Actualiza el registro seleccionado en la base de datos
  updateTicket() {
    this.apiservice.updateTicket(this.id, this.ticket)
        .subscribe(
          (response: any) => {
            this.message = response;
            this.alerta.toastNotification(
              this.message.message,
              '',
              'green',
              'far fa-check-circle'
            );
            this.router.navigate(['/listado-tickets']);
          },
          error => {
            this.alerta.toastNotification(
              error.name,
              '',
              'red',
              'fas fa-times'
            );
          }
        );
  }
}
