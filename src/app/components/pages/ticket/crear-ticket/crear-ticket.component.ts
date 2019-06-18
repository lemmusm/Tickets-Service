import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { ApiService } from 'src/app/providers/api.service';
import { AlertaService } from 'src/app/providers/alerta.service';
import { AuthService } from 'src/app/providers/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/models/servicio';

@Component({
  selector: 'app-crear-ticket',
  templateUrl: './crear-ticket.component.html',
  styles: []
})
export class CrearTicketComponent implements OnInit {
  // Se crea objeto de tipo ticket y se inicializa
  array: any = { displayName: '', departamento: {} };
  ticket: Ticket = {};
  // se crea objeto de tipo Usuario y a su vez el objeto departartamento, ambos se inicializan
  usuario: Usuario = {
    departamento: {}
  };
  message: any; // variable creada para almacenar la respuesta del servidor
  fecha = new Date(); // variable que almacena la fecha actual
  id = this.authservice.uid; // Se almacena el uid de los datos de firebase
  servicios: Servicio;

  constructor(
    private apiservice: ApiService,
    private router: Router,
    public authservice: AuthService,
    private alerta: AlertaService
  ) {}

  ngOnInit() {
    this.mostrarUsuarioFiltrado();
    this.mostrarServicios();
  }

  /*
    Traer datos de la base de datos de acuerdo al id (nombre,
    email y departamento)
  */
  mostrarUsuarioFiltrado() {
    this.apiservice.getFilterUser(this.id)
        .subscribe((response: any) => {
          this.usuario = response;
          this.ticket.usuario_uid = this.authservice.uid; // Se almacena el uid de los datos de firebase para usarlo como huella digital
        });
        // .pipe(
        //   map(
        //     response => response['displayName']
        //   )
        // ).subscribe(
        //   respuesta => {
        //     this.usuario.displayName = respuesta;
        //     console.log(this.usuario);
        //   }
        // );

  }
  /*
    Método para agregra solicitud a la base de datos, envia usuario_uid, servicio y descripcion,
    los campos diagnostico, filesattach, tecnico se van vacios, status se llena en automatico como
    'Asignación pendiente'.
  */
  guardarSolicitud() {
    this.apiservice.saveSolicitud(this.ticket).subscribe(
      (response: any) => {
        this.message = response;
        this.alerta.toastNotification(
          'Solicitud de servicio creada correctamente.',
          '',
          'green',
          'fas fa-check-circle'
        );
        this.router.navigate(['dashboard']);
      },
      error => {
        this.alerta.toastNotification(error.name, '', 'red', 'fas fa-times');
      }
    );
  }
    /**
     * Obtiene los servicios registrados en la base de datos
     */
  mostrarServicios() {
    this.apiservice.getServicios()
        .subscribe(
          (response: any) => {
            this.servicios = response;
          }
        );
  }
}
