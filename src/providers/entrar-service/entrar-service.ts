import { Usuario } from './../../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EntrarServiceProvider {

  constructor(public http: HttpClient) {
  }

  entrar(usuario: Usuario) {
    return this.http.post("http://aps-usuarios.herokuapp.com/api/login", usuario, {
      headers: {
        'content'    : "application/json",
        'contet-type': "application/x-www-form-urlencoded"
      }
    });
  }
}
