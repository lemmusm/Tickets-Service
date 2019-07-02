import { Component, OnInit } from '@angular/core';
import { Ubicacion } from 'src/app/models/ubicacion';
import { AlertaService } from 'src/app/providers/alerta.service';
import { ApiService } from 'src/app/providers/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-ubicacion',
  templateUrl: './editar-ubicacion.component.html',
  styles: []
})
export class EditarUbicacionComponent implements OnInit {

  id = this.aroute.snapshot.paramMap.get('id');
  ubicacion: Ubicacion = {};
  message: any;

  constructor(public router: Router,
    private aroute: ActivatedRoute,
    private apiservice: ApiService,
    private alerta: AlertaService
  ) { }

  ngOnInit() {
    this.mostrarUbicacion();
  }

  mostrarUbicacion() {
    this.apiservice.getUbicacion(this.id)
      .subscribe(
        (response: any) => {
          this.ubicacion = response;
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

  actualizarUbicacion() {
    this.apiservice.updateUbicacion(this.id, this.ubicacion)
      .subscribe(
        (response: any) => {
          this.message = response;
          this.alerta.toastNotification(
            this.message.message,
            '',
            'green',
            'far fa-check-circle'
          );
          this.router.navigate(['admin/ubicaciones']);
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
