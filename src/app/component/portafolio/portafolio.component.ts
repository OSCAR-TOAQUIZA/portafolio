import { Component } from '@angular/core';
import { Producto } from '../../service/producto.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: []
})
export class PortafolioComponent {

  constructor( public _pd: Producto) { }


}
