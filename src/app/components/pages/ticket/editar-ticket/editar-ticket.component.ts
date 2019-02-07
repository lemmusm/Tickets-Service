import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { AlertaService } from 'src/app/providers/alerta.service';

@Component({
  selector: 'app-editar-ticket',
  templateUrl: './editar-ticket.component.html',
  styles: []
})
export class EditarTicketComponent implements OnInit {

  id = this.aroute.snapshot.paramMap.get('id');
  ticket: Ticket = {};
  message: any;

  constructor(private apiservice: ApiService, private router: Router, private aroute: ActivatedRoute, private alerta: AlertaService) { }

  ngOnInit() {
    this.getTicketByID();
  }

  getTicketByID() {
    this.apiservice.getTicketByID(this.id)
        .subscribe(
          (response: any) => {
            this.ticket = response;
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
