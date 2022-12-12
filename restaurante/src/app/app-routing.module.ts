import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminserviciosComponent } from './components/adminservicios/adminservicios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbaruserComponent } from './components/navbaruser/navbaruser.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
{path: 'navbarus', component: NavbaruserComponent},
{path: 'servicios', component: ServiciosComponent},
{path: 'adminservicios', component:AdminserviciosComponent},
{path:'**', redirectTo:'inicio', pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }