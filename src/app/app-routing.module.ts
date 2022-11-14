import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/Auxiliares/home-page/home-page.component';
import { PageNotFoundComponent } from './Pages/Auxiliares/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:"home",
    component:HomePageComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/home"
  },
  {
    path:"seguridad",
    loadChildren: ()=>import("./Modulos/seguridad/seguridad.module").then(x=>x.SeguridadModule)
  },
  {
    path:"**",
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
