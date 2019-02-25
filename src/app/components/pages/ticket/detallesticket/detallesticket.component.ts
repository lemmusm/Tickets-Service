import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-detallesticket',
  templateUrl: './detallesticket.component.html',
  styles: []
})
export class DetallesticketComponent implements OnInit {
  id = this.aroute.snapshot.paramMap.get('id'); // Para capturar el id seleccionado
  ticket: Ticket = {};
  estados = this.apiservice.estados; // Trae el array de los estados
  servicios = this.apiservice.servicios; // Trae el array de los servicios
  menuhide = false;
  constructor(private apiservice: ApiService, private aroute: ActivatedRoute) {}

  ngOnInit() {
    this.getDetallesTicket();
  }

  getDetallesTicket() {
    this.apiservice.getTicketByID(this.id).subscribe((response: any) => {
      this.ticket = response;
    });
  }
}
