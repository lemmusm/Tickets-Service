import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  year = new Date().getFullYear();

  constructor(public authservice: AuthService) { }

  ngOnInit() {
  }

  signInWithGoogle() {
    this.authservice.signInWithGoogle();
  }
}
