import { Component } from '@angular/core';
import { Informacion } from './service/informacion.service';
import { Producto } from './service/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public _serviceInfo: Informacion,
  public _ps: Producto) {

  }
}
