import { Component } from '@angular/core';
import { Informacion } from '../../service/informacion.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../service/producto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

termino: string = undefined;

  constructor(
    public _pd:  Producto,
    private _ar: ActivatedRoute
  ) {
    // console.log(this._pd);
    _ar.params.subscribe( parametros => {
      this.termino = parametros['termino'];
      console.log(this.termino);
      _pd.buscar_producto(this.termino);
    });
  }



}
