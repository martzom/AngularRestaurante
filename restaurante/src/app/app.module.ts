import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbaruserComponent } from './components/navbaruser/navbaruser.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AcercaComponent } from './components/acerca/acerca.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbaruserComponent,
    InicioComponent,
    ServiciosComponent,
    AcercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
