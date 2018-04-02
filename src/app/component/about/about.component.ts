import { Component, OnInit } from '@angular/core';
import { Informacion } from '../../service/informacion.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent {

  constructor( public _is: Informacion) { }


}
