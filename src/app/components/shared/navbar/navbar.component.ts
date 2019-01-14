import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  signOut() {
    this.authservice.signOut();
  }
}
