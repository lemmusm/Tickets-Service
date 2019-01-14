import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(public authservice: AuthService) { }

  canActivate() {
    return this.authservice.isAuth();
  }
}
