import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../service/producto.service';


@Component({
  selector: 'app-portafolio-individual',
  templateUrl: './portafolio-individual.component.html',
  styles: []
})
export class PortafolioIndividualComponent {

  producto: any = undefined;
  cod: string = undefined;

  constructor( private route: ActivatedRoute, public _ps: Producto) {
    route.params.subscribe( parametros => {
      // console.log(parametros);
      // console.log(parametros['id']);
      _ps.cargar_producto_unico(parametros['id']).subscribe(
        res => {
          console.log(res.json());
          this.cod = parametros['id'];
          this.producto = res.json();
        },
        error => {

        });
    });
   }



}
