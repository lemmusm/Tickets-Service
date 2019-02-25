import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { Ticket } from 'src/app/models/ticket';
import { Subject } from 'rxjs';
import { AlertaService } from 'src/app/providers/alerta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tickets',
  templateUrl: './lista-tickets.component.html',
  styles: []
})
export class ListaTicketsComponent implements OnInit {
  tickets: Ticket;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  message: any;

  constructor(private apiservice: ApiService, private alerta: AlertaService) {}

  ngOnInit() {
    this.getTickets();
  }

  getTickets() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      order: [0, 'desc'],
      pageLength: 10
    };
    this.apiservice.getTickets().subscribe(
      (response: any) => {
        this.tickets = response;
        this.dtTrigger.next();
      },
      error => {
        this.alerta.toastNotification(error.name, '', 'red', 'fas fa-times');
      }
    );
  }

  deleteTicket(id: number) {
    Swal.fire({
      title: '¿Deseas eliminar el registro?',
      text: 'Será borrado de forma permanente',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#88D2F7',
      cancelButtonColor: '#FC9297',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.apiservice.deleteTicket(id).subscribe(
          response => {
            this.message = response;
            this.alerta.toastNotification(
              this.message.message,
              '',
              'yellow',
              'far fa-check-circle'
            );
            this.recargaDatatable();
          },
          error => {
            this.alerta.toastNotification(
              error.statusText,
              '',
              'red',
              'fas fa-times'
            );
          }
        );
      }
    });
  }

  recargaDatatable() {
    $('#listadoTickets')
      .DataTable()
      .destroy();
    this.getTickets();
  }
}
