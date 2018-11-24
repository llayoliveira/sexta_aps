import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { NiveisPage } from '../niveis/niveis';


@Component({
  selector: 'page-cobranca',
  templateUrl: 'cobranca.html',
})
export class CobrancaPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  darAlerta() {
    let alert = this.alertCtrl.create({
      title: 'Multar Fazenda',
      inputs: [
        {
          name: 'valorMulta',
          placeholder: 'R$ XXXX,XX'
        }
      ],
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          handler: () => {
            console.log('Clicou no Multar');
            this.navCtrl.setRoot(NiveisPage);
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CobrancaPage');
  }
}