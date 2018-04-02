import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { reject } from 'q';


@Injectable()
export class Producto {

  producto: any[] = [];
  cargando_productos = false;
  producto_filtrado: any[] = [];
  constructor( private http: Http) {
    this.cargar_producto();
  }

  public cargar_producto_unico( cod: string ) {
    // templete literal.. (altgrt + }) => `
    return this.http.get(`https://htmlaangular-17b69.firebaseio.com/producto/${cod}.json`);
  }

  public cargar_producto() {

  this.cargando_productos = true;

  // tslint:disable-next-line:no-shadowed-variable
  // tslint:disable-next-line:prefer-const
  // tslint:disable-next-line:no-shadowed-variable
  const promesa = new Promise(( resolve , reject) => {
    // if ( this.producto.length === 0) {
      this.http.get('https://htmlaangular-17b69.firebaseio.com/productos_idx.json').subscribe(
        res => {
          // console.log(res.json());
          // setTimeout( () => {
            this.cargando_productos = true;
            this.producto = res.json();
            resolve();
          // }, 1500 );
        });
    // }

  });
  return promesa;
  }

  public buscar_producto( termino: string ) {
    // console.log('Buscando Producto');
    // console.log(this.producto.length);

    if (this.producto.length === 0) {
      this.cargar_producto().then( () => {
        // termino la carga
        this.filtrar_producto(termino);      });
    } else {
      this.filtrar_producto(termino);
    }
  }

  private filtrar_producto(termino: string) {
    this.producto_filtrado = [];
    termino = termino.toLowerCase();
    this.producto.forEach( prod => {
      if (prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf( termino) >= 0 ) {
         this.producto_filtrado.push(prod);
      }
      // console.log(prod);
    });
  }
}
