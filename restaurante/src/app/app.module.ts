import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbaruserComponent } from './components/navbaruser/navbaruser.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { AdminserviciosComponent } from './components/adminservicios/adminservicios.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({ 
  declarations: [
    AppComponent,
    NavbaruserComponent,
    InicioComponent,
    ServiciosComponent,
    AcercaComponent,
    AdminserviciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
