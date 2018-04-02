import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Informacion {

  info: any = {};
  equipo: any[] = [];
  cargada_sobre_nosotros = false;
  cargada = false;
  constructor( public http: Http) {
    this.carga_info();
    this.carga_sobre_nosotros();
  }

  public carga_info () {
    this.http.get('assets/data/info.pagina.json').subscribe(
      data => {
        // console.log(data.json());
        this.cargada = true;
        this.info = data.json();
      });
  }

  public carga_sobre_nosotros() {
    this.http.get('https://htmlaangular-17b69.firebaseio.com/equipo.json').subscribe(
      data => {
        // console.log(data.json());
        this.cargada_sobre_nosotros = true;
        this.equipo = data.json();
      });
  }
}
