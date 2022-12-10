import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbaruserComponent } from './components/navbaruser/navbaruser.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
{path: 'navbarus', component: NavbaruserComponent},
{path:'**', redirectTo:'inicio', pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }