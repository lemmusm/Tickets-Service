import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { ApiService } from 'src/app/providers/api.service';
import { AlertaService } from 'src/app/providers/alerta.service';
import { AuthService } from 'src/app/providers/auth.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/models/servicio';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-ticket',
  templateUrl: './crear-ticket.component.html',
  styles: []
})
export class CrearTicketComponent implements OnInit {

  ticket: Ticket = {};
  // se crea objeto de tipo Usuario y a su vez el objeto departartamento, ambos se inicializan
  usuario: Usuario = {
    departamento: {}
  };
  message: any; // variable creada para almacenar la respuesta del servidor
  fecha = new Date(); // variable que almacena la fecha actual
  id = this.authservice.uid; // Se almacena el uid de los datos de firebase
  servicios: Servicio;

  ruta = 'https://www.uppenjamo.edu.mx/sistemas/uploads/';
  selectedFile: File;
  formData: any = '';

  constructor(
    private apiservice: ApiService,
    private router: Router,
    public authservice: AuthService,
    private alerta: AlertaService
  ) { }

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
  }
  /*
    Método para agregra solicitud a la base de datos, envia usuario_uid, servicio y descripcion,
    los campos diagnostico, filesattach, tecnico se van vacios, status se llena en automatico como
    'Asignación pendiente'.
  */
  guardarSolicitud() {
    /*
      Detecta si hay archivo seleccionado, si hay comprueba que no exista en el  almacenamiento,
      si existe, no crea la solicitud y marca error, de lo contrario guarda la solicitud.

      Si no existe archivo seleccionado, guarda la solicitud.
    */
    if (this.selectedFile) {
      this.apiservice.sendFile(this.formData)
        .subscribe(
          (response: any) => {
            if (response.status === 'error') {
              Swal.fire({
                title: response.message,
                html: '<strong class="file"> Se recomienda cambiar el nombre del archivo </strong>',
                type: 'error',
                confirmButtonText: 'Ok'
              });
            } else {
              this.generaSolicitud(); // Guarda solicitud
              console.log(response.message);
            }
          },
          error => {
            this.alerta.toastNotification(error.statusText, '', 'red', 'fas fa-times');
          }
        );
    } else {
      this.generaSolicitud();
    }
  }

  generaSolicitud() {
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
  // Guarda solicitud, detacta si el archivo enviado existe cancela envio, si no crea la

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

  /*
    Obtiene data del file, comprueba si el archivo sobrepasa el peso maáximo, si es así no carga el file.
  */
  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    const peso = this.selectedFile.size / 1048576; // Obtiene el peso y lo convierte a Mb
    if (this.selectedFile.size > 17825792) {
      Swal.fire({
        title: 'Sobrepasó peso máximo de 16Mb',
        html: '<strong class="file"> Tu archivo pesa: </strong>' + '<strong class="tx-danger">' + peso.toFixed(1) + 'Mb' + '</strong> ' + '<strong class="file">, el archivo no se cargará. </strong>',
        type: 'error',
        confirmButtonText: 'Ok'
      });
    } else {
      this.formData = new FormData();
      this.formData.append('file', this.selectedFile, this.selectedFile.name);
      this.ticket.filesattach = this.ruta + this.selectedFile.name;
    }
  }
}
