import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {
  year = new Date().getFullYear();
  email: any;

  constructor(public authservice: AuthService, private router: Router) { }

}
