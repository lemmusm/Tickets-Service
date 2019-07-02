import { Servicio } from './../../../../models/servicio';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/providers/api.service';
import { AlertaService } from 'src/app/providers/alerta.service';

@Component({
  selector: 'app-editar-servicio',
  templateUrl: './editar-servicio.component.html',
  styles: []
})
export class EditarServicioComponent implements OnInit {
  id = this.aroute.snapshot.paramMap.get('id');
  servicio: Servicio = {};
  message: any;

  constructor(
    public router: Router,
    private aroute: ActivatedRoute,
    private apiservice: ApiService,
    private alerta: AlertaService) { }

  ngOnInit() {
    this.mostrarServicio();
  }

  mostrarServicio() {
    this.apiservice.getServicio(this.id)
      .subscribe(
        (response: any) => {
          this.servicio = response;
        }
      );
  }

  actualizarServicio() {
    this.apiservice.updateServicio(this.id, this.servicio)
      .subscribe(
        (response: any) => {
          this.message = response;
          this.alerta.toastNotification(
            this.message.message,
            '',
            'green',
            'far fa-check-circle'
          );
          this.router.navigate(['admin/servicios']);
        },
        error => {
          console.log(error);
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
