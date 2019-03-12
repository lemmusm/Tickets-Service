import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit {
  totalTickets: any;

  constructor(private apiservice: ApiService) {}

  ngOnInit() {
    this.getTotalTickets();
  }

  getTotalTickets() {
    this.apiservice.getTotalTickets().subscribe((response: any) => {
      this.totalTickets = response;
    });
  }
}
