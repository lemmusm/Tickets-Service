import { Injectable } from '@angular/core';
// Ng2IzitoastService
import { Ng2IzitoastService } from 'ng2-izitoast';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor(private iziToast: Ng2IzitoastService) { }

  toastNotification(title: string, message: string, color: string, icon: string, timeout?: number, position?: string, progressBarColor?: string) {
    this.iziToast.show(
      {
        title: title,
        message: message,
        color: color, //// blue, red, green, yellow
        icon: icon,
        timeout: 8000,
        position: 'topCenter',
        progressBarColor: '#2c3e50'
      }
    );
  }
}
