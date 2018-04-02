import { Component } from '@angular/core';
import {Informacion} from '../../service/informacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor( public _infoService: Informacion,
                private _router: Router ) {

  }

  buscar_producto( termino: string) {
    console.log(termino);
    this._router.navigate(['buscar', termino]);
  }

}
