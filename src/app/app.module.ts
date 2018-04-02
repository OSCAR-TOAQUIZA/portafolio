import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';

// Rutas
import {app_router} from './app.routing';

// Service
import { Informacion } from './service/informacion.service';
import { Producto } from './service/producto.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PortafolioComponent } from './component/portafolio/portafolio.component';
import { AboutComponent } from './component/about/about.component';
import { PortafolioIndividualComponent } from './component/portafolio-individual/portafolio-individual.component';
import { SearchComponent } from './component/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortafolioIndividualComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    app_router,
    HttpModule,
    RouterModule
  ],
  providers: [Informacion, Producto],
  bootstrap: [AppComponent]
})
export class AppModule { }
