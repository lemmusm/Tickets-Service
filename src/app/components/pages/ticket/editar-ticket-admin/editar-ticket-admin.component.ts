import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { ApiService } from 'src/app/providers/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertaService } from 'src/app/providers/alerta.service';
import { AuthService } from 'src/app/providers/auth.service';
import { Servicio } from 'src/app/models/servicio';

@Component({
  selector: 'app-editar-ticket-admin',
  templateUrl: './editar-ticket-admin.component.html',
  styles: []
})
export class EditarTicketAdminComponent implements OnInit {

  id = this.aroute.snapshot.paramMap.get('id');
  ticket: Ticket = {};
  servicios: Servicio;
  filename: any;
  message: any;
  estados = this.apiservice.estados;

  constructor(
    private apiservice: ApiService,
    public authservice: AuthService,
    private router: Router,
    private aroute: ActivatedRoute,
    private alerta: AlertaService
  ) { }

  ngOnInit() {
    this.mostrarTicket();
    this.mostrarServicios();
  }
  // Trae los registros de los tickets almacenados en la base de datos
  mostrarTicket() {
    this.apiservice.getTicket(this.id)
      .subscribe(
        (response: any) => {
          this.ticket = response;
          this.ticket.tecnico = this.authservice.displayName; // Almacena el nombre de Firebase para firmar como el técnico
          this.filename = this.ticket.filesattach.substring(this.ticket.filesattach.lastIndexOf('uploads/') + 8); // Substrae el nombre del archivo de la cadena
        }, error => {
          this.alerta.toastNotification(
            error.name,
            '',
            'red',
            'fas fa-times'
          );
        }
      );
  }

  mostrarServicios() {
    this.apiservice.getServicios()
      .subscribe(
        (response: any) => {
          this.servicios = response;
        }
      );
  }
  // Actualiza el registro seleccionado en la base de datos
  actualizarTicket() {
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
          this.router.navigate(['admin/listado-tickets']);
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
