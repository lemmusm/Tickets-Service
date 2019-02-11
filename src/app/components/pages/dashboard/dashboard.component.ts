import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { AuthService } from 'src/app/providers/auth.service';
import { Subject } from 'rxjs';
import { Ticket } from 'src/app/models/ticket';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  fecha = new Date();
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  tickets: Ticket;

  constructor(
    public authservice: AuthService,
    private apiservice: ApiService
  ) {}

  ngOnInit() {
    this.verifyAndSaveUser();
    this.getTickets();
  }

// tslint:disable-next-line:max-line-length
// Consulta UID en la base de datos local y compará con el de firebase, si existe omite el guardado si no lo guarda en la base de datos local
  verifyAndSaveUser() {
    this.apiservice
      .getUsuarioByUID(this.authservice.usuario.uid)
      .subscribe((response: any) => {
        if (response.uid === undefined) {
          this.postUsuario(); // llamada al método post para guardar
        } else {
          console.log('🎯👍');
        }
      });
  }
// Traer tickets del usuario
  getTickets() {
    this.dtOptions = { pagingType: 'full_numbers', order: [0, 'desc'], pageLength: 5, lengthMenu: [5, 10, 15]};
    this.apiservice.getLastTickets()
        .subscribe(
          (response: any) => {
            this.tickets = response;
            this.dtTrigger.next();
          }
        );
  }
// Guarda usuario en la base de datos
  postUsuario() {
    this.apiservice.postUsuario(this.authservice.usuario).subscribe(
      response => {
        console.log('🚀💾 💌');
      },
      error => {
        console.log('💢');
      }
    );
  }
}
