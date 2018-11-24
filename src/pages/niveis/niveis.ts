import { Storage } from '@ionic/storage';
import { HomePage } from './../home/home';
import { AlertaPage } from './../alerta/alerta';
import { FazendaPage } from './../fazenda/fazenda';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CobrancaPage } from '../cobranca/cobranca';

@Component({
  selector: 'page-niveis',
  templateUrl: 'niveis.html',
})
export class NiveisPage {

  public level: number = 0;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _armazenamento: Storage) {
  }

  ionViewDidLoad() {
    this._armazenamento.get('level')
      .then(level => {
        this.level = level;
      });
  }

  abrirInfoFazendas() {
    this.navCtrl.push(FazendaPage);
  }

  abrirCobranca() {
    this.navCtrl.push(CobrancaPage);
  }
  
  abrirAlerta() {
    this.navCtrl.push(AlertaPage);
  }

  sair() {
    this._armazenamento.set('level', 0);
    this.navCtrl.setRoot(HomePage);
  }

}
