import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/Pages/Auxiliares/page-not-found/page-not-found.component';
import { CrearPersonaComponent } from '../parametros/clientes/crear-persona/crear-persona.component';
import { LoginComponent } from './general/login/login.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path: "registrese",
    component: CrearPersonaComponent
  },
  {
    path: "logout",
    component: LoginComponent
  },
  {
    path:"**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
