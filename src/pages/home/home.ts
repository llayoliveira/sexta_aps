import { NiveisPage } from './../niveis/niveis';
import { EntrarServiceProvider } from './../../providers/entrar-service/entrar-service';
import { Usuario } from './../../models/usuario';
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public email: string = '';
  public password: string = '';
  public salvo: boolean = false;

  constructor(public navCtrl: NavController,
    private _alerta: AlertController,
    private _carregar: LoadingController,
    private _servicoEntrar: EntrarServiceProvider,
    private _armazenamento: Storage,
    private faio: FingerprintAIO) {
  }

  ionViewDidLoad(){
   this._armazenamento.get('email')
    .then(email => {
      this.faio.isAvailable()
        .then(res => {
          this.salvo = true;
        })
        .catch(err => {
          this.salvo = false;
        });
      this.email = email;
    })
    .catch(err => this.salvo = false);

    this._armazenamento.get('senha')
    .then(password => {
      this.faio.isAvailable()
        .then(res => {
          this.salvo = true;
        })
        .catch(err => {
          this.salvo = false;
        });
      this.password = password;
    })
    .catch(err => this.salvo = false);
  }

  login() {
    let carregando = this._carregar.create({
      content: 'Carregando...'
    });

    carregando.present();

    let erro = this._alerta.create({
      title: 'Erro',
      subTitle: 'Campos vazios, preencha todos!',
      buttons: [
        { text: 'OK' }
      ]
    });

    if (!this.email || !this.password) {
      erro.present();
      carregando.dismiss();
      return false;
    }

    let usuario: Usuario = {
      email: this.email,
      password: this.password
    }

    this._servicoEntrar.entrar(usuario)
      .timeout(20000)
      .subscribe(res => {
        this._armazenamento.set('email', this.email);
        this._armazenamento.set('senha', this.password);
        // this._armazenamento.set('level', res['level']);
        carregando.dismiss();
        this.navCtrl.setRoot(NiveisPage);
      },
      err => {
        carregando.dismiss();
        erro.setSubTitle('Erro ao tentar conectar, tente novamente mais tarde!');
        erro.present();
        return false;
      });
  }

  editar() {
    this._armazenamento.clear();
    this.salvo = false;
  }

  biometria() {
    this.faio.show({
      clientId: 'final',
      clientSecret: 'password',
      disableBackup:true,
      localizedFallbackTitle: 'Use Pin',
      localizedReason: 'Please authenticate'
  })
  .then((result: any) => this.login())
  .catch((error: any) => console.log(error));
  }

}
