import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styles: []
})

export class ControlpanelComponent implements OnInit {

  totalTickets: any;

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.getTotalTickets();
  }

  getTotalTickets() {
    this.apiservice.getTotalTickets()
        .subscribe(
          (response: any) => {
            this.totalTickets = response;
          }
        );
  }
}
