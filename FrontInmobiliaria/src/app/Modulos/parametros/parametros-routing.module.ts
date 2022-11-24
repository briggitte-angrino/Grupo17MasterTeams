import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarCiudadComponent } from './ciudad/consultar-ciudad/consultar-ciudad.component';
import { EditarCiudadComponent } from './ciudad/editar-ciudad/editar-ciudad.component';
import { ConsultarCodeudorComponent } from './codeudor/consultar-codeudor/consultar-codeudor.component';
import { ConsultarDepartamentoComponent } from './departamento/consultar-departamento/consultar-departamento.component';
import { ConsultarEstadoSolicitudComponent } from './estado_solicitud/consultar-estado-solicitud/consultar-estado-solicitud.component';
import { ConsultarInmueblesComponent } from './inmuebles/consultar-inmuebles/consultar-inmuebles.component';
import { EditarInmueblesComponent } from './inmuebles/editar-inmuebles/editar-inmuebles.component';
import { ConsultarRolesComponent } from './roles/consultar-roles/consultar-roles.component';
import { ConsultarSolicitudComponent } from './solicitud/consultar-solicitud/consultar-solicitud.component';
import { ConsultarTipoInmuebleComponent } from './tipo_inmueble/consultar-tipo-inmueble/consultar-tipo-inmueble.component';
import { ConsultarTipoOfertaComponent } from './tipo_oferta/consultar-tipo-oferta/consultar-tipo-oferta.component';

const routes: Routes = [
  { path:"consultar",component: ConsultarInmueblesComponent},
  { path:"ciudad",component: ConsultarCiudadComponent},
  { path:"editarCiudad/:id",component: EditarCiudadComponent},
  { path:"inmueble",component: ConsultarInmueblesComponent},
  { path:"departamento",component: ConsultarDepartamentoComponent},
  { path:"roles",component: ConsultarRolesComponent},
  { path:"estadosolicitud",component: ConsultarEstadoSolicitudComponent},
  { path:"solicitud",component: ConsultarSolicitudComponent},
  { path:"tipoinmueble",component: ConsultarTipoInmuebleComponent},
  { path:"tipooferta",component: ConsultarTipoOfertaComponent},
  { path:"codeudor",component: ConsultarCodeudorComponent},
  { path:"editarinmueble/:id",component: EditarInmueblesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
