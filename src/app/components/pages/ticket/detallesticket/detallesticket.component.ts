import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-detallesticket',
  templateUrl: './detallesticket.component.html',
  styles: []
})
export class DetallesticketComponent implements OnInit {

  filename: any;
  id = this.aroute.snapshot.paramMap.get('id'); // Para capturar el id seleccionado
  ticket: Ticket = {};
  constructor(private apiservice: ApiService, private aroute: ActivatedRoute) { }

  ngOnInit() {
    this.mostrarTicket();
  }

  mostrarTicket() {
    this.apiservice.getTicket(this.id)
      .subscribe((response: any) => {
        this.ticket = response;
        this.filename = this.ticket.filesattach.substring(this.ticket.filesattach.lastIndexOf('uploads/') + 8); // Substrae el nombre del archivo de la cadena
      });
  }
}
