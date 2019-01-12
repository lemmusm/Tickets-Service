import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  year = new Date().getFullYear();
  
  constructor() { }

  ngOnInit() {
  }

}
