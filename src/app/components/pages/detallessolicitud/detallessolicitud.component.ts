import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-detallessolicitud',
  templateUrl: './detallessolicitud.component.html',
  styles: []
})
export class DetallessolicitudComponent implements OnInit {

  id = this.aroute.snapshot.paramMap.get('id'); // Para capturar el id seleccionado
  ticket: Ticket = {};
  estados = this.apiservice.estados; // Trae el array de los estados

  constructor(
    private apiservice: ApiService,
    private aroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.mostrarTicket();
  }
  /*
    Obtiene los datos correspondientes al ticket seleccionado
  */
  mostrarTicket() {
    this.apiservice.getTicket(this.id).subscribe((response: any) => {
      this.ticket = response;
    });
  }
}
