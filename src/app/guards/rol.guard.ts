import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {

  constructor(public authservice: AuthService) { }

  canActivate(): any {
    return this.authservice.administrator();
  }
}
