import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  year = new Date().getFullYear();

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

}
