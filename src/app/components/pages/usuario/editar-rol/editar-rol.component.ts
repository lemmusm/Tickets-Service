import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { AlertaService } from 'src/app/providers/alerta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Rol } from 'src/app/models/rol';

@Component({
  selector: 'app-editar-rol',
  templateUrl: './editar-rol.component.html',
  styles: []
})
export class EditarRolComponent implements OnInit {

  id = this.aroute.snapshot.paramMap.get('id');
  rol: Rol = {};
  message: any;

  constructor(
    public router: Router,
    private aroute: ActivatedRoute,
    private apiservice: ApiService,
    private alerta: AlertaService) { }

  ngOnInit() {
    this.mostrarRol();
  }

  mostrarRol() {
    this.apiservice.getRol(this.id)
      .subscribe(
        (response: any) => {
          this.rol = response;
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

  actualizarRol() {
    this.apiservice.updateRol(this.id, this.rol)
      .subscribe(
        (response: any) => {
          this.message = response;
          this.alerta.toastNotification(
            this.message.message,
            '',
            'green',
            'far fa-check-circle'
          );
          this.router.navigate(['admin/roles']);
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
