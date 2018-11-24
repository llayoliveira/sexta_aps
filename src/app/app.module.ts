import { CobrancaPage } from './../pages/cobranca/cobranca';
import { AlertaPage } from './../pages/alerta/alerta';
import { FazendaPage } from './../pages/fazenda/fazenda';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/timeout'
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EntrarServiceProvider } from '../providers/entrar-service/entrar-service';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage'
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { NiveisPage } from '../pages/niveis/niveis';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NiveisPage,
    CobrancaPage,
    FazendaPage,
    AlertaPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NiveisPage,
    CobrancaPage,
    FazendaPage,
    AlertaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FingerprintAIO,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EntrarServiceProvider
  ]
})
export class AppModule {}
