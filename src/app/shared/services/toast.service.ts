import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {


  constructor(private toastController: ToastController) { }

  public async setError(message: string) {
    const toast = await this.toastController.create({
      duration: 3000,
      message,
      showCloseButton: true,
      color: 'danger',
    });
    await toast.present();
  }

  public async setWarning(message: string) {
    const toast = await this.toastController.create({
      duration: 3000,
      message,
      showCloseButton: true,
      color: 'warning',
    });
    await toast.present();
  }

  public async setInfo(message: string) {
    const toast = await this.toastController.create({
      duration: 3000,
      message,
      showCloseButton: true,
      color: 'success',
    });
    await toast.present();
  }

}
