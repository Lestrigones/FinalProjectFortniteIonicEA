import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';


//centralizaremos todas las alertas y notificaciones

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor(private alertController: AlertController,
    private toastController: ToastController ) { }

  async AlertInfo(message: string) {
    const alert = await this.alertController.create({
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast( message: string ) {
    const toast = await this.toastController.create({
      message,
      position: 'top',
      duration: 1500
    });
    toast.present();
  }
}
