import { Component } from '@angular/core';
import {Informacion} from '../../service/informacion.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {

  anio: number = new Date().getFullYear();

  constructor(public _infoService: Informacion) {
  }

}
