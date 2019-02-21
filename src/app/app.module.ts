import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
// LOCALE
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
// angularfire
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
// HTTP
import { HttpClientModule } from '@angular/common/http';
// FormsModule
import { FormsModule } from '@angular/forms';
// Ng2IziToastModule
import {Ng2IziToastModule} from 'ng2-izitoast';
// datatables
import { DataTablesModule } from 'angular-datatables';
// componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ListaUsuarioComponent } from './components/pages/usuario/lista-usuario/lista-usuario.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { EditarUsuarioComponent } from './components/pages/usuario/editar-usuario/editar-usuario.component';
import { ControlpanelComponent } from './components/pages/controlpanel/controlpanel.component';
import { MenucontrolpanelComponent } from './components/shared/menucontrolpanel/menucontrolpanel.component';
import { ListaDepartamentoComponent } from './components/pages/departamento/lista-departamento/lista-departamento.component';
import { EditarDepartamentoComponent } from './components/pages/departamento/editar-departamento/editar-departamento.component';
import { AgregardepartamentoComponent } from './components/pages/departamento/agregardepartamento/agregardepartamento.component';
import { ListaTicketsComponent } from './components/pages/ticket/lista-tickets/lista-tickets.component';
import { EditarTicketComponent } from './components/pages/ticket/editar-ticket/editar-ticket.component';
import { EditarTicketAdminComponent } from './components/pages/ticket/editar-ticket-admin/editar-ticket-admin.component';
import { EditarUsuarioAdminComponent } from './components/pages/usuario/editar-usuario-admin/editar-usuario-admin.component';
import { CrearTicketComponent } from './components/pages/ticket/crear-ticket/crear-ticket.component';
import { HistorialComponent } from './components/pages/historial/historial.component';
import { ServiciosComponent } from './components/shared/charts/servicios/servicios.component';
import { StatusComponent } from './components/shared/charts/status/status.component';
import { DepartamentosComponent } from './components/shared/charts/departamentos/departamentos.component';
import { DetallessolicitudComponent } from './components/pages/detallessolicitud/detallessolicitud.component';
import { ChangelogComponent } from './components/pages/changelog/changelog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    ListaUsuarioComponent,
    MenuComponent,
    EditarUsuarioComponent,
    ControlpanelComponent,
    MenucontrolpanelComponent,
    ListaDepartamentoComponent,
    EditarDepartamentoComponent,
    AgregardepartamentoComponent,
    ListaTicketsComponent,
    EditarTicketComponent,
    EditarTicketAdminComponent,
    EditarUsuarioAdminComponent,
    CrearTicketComponent,
    HistorialComponent,
    ServiciosComponent,
    StatusComponent,
    DepartamentosComponent,
    DetallessolicitudComponent,
    ChangelogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    Ng2IziToastModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
