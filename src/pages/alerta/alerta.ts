import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { NiveisPage } from '../niveis/niveis';


@Component({
  selector: 'page-alerta',
  templateUrl: 'alerta.html',
})
export class AlertaPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  interditar() {
    let alert = this.alertCtrl.create({
      title: 'Interditar Fazenda',
      subTitle: 'Deseja realmente interditar as fazendas temporiariamente? ',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: () => {
            console.log('Clicou no Multar');
            this.navCtrl.setRoot(AlertaPage);
          }
        },
        {
          text: 'OK',
          role: 'ok',
          handler: () => {
            console.log('Clicou no Interditar');
            this.navCtrl.setRoot(NiveisPage);
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ALertaPage');
  }
}