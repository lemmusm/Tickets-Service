import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  year = new Date().getFullYear();
  email: any;

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }

  controlpanel() {
    this.email = this.authservice.usuario.email;

    switch (this.email) {
      case 'mhernandez@uppenjamo.edu.mx':
        this.router.navigate(['control-panel']);
        break;
      case 'cc@uppenjamo.edu.mx':
        this.router.navigate(['control-panel']);
        break;
      default:
        location.href = "https://uppenjamo.edu.mx";
        break;
    }
  }

}
