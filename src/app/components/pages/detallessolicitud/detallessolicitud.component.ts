import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-detallessolicitud',
  templateUrl: './detallessolicitud.component.html',
  styles: []
})
export class DetallessolicitudComponent implements OnInit {
  id = this.aroute.snapshot.paramMap.get('id'); // Para capturar el id seleccionado
  ticket: Ticket = {};
  huelladigitaltecnico = this.authservice.uid;
  estados = this.apiservice.estados; // Trae el array de los estados
  servicios = this.apiservice.servicios; // Trae el array de los servicios
  menuhide = false;

  constructor(
    private apiservice: ApiService,
    private aroute: ActivatedRoute,
    private authservice: AuthService
  ) {}

  ngOnInit() {
    this.getDetallesTicket();
    this.menuhide = true;
  }

  getDetallesTicket() {
    this.apiservice.getTicketByID(this.id).subscribe((response: any) => {
      this.ticket = response;
    });
  }
}
