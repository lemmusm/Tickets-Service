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
  id = this.aroute.snapshot.paramMap.get('id'); // Para capturar el id seleccionado
  ticket: Ticket = {};
  constructor(private apiservice: ApiService, private aroute: ActivatedRoute) {}

  ngOnInit() {
    this.mostrarTicket();
  }

  mostrarTicket() {
    this.apiservice.getTicket(this.id)
        .subscribe((response: any) => {
          this.ticket = response;
        });
  }
}
