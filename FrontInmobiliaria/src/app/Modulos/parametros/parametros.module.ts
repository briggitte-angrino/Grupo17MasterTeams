import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearPersonaComponent } from './clientes/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './clientes/editar-persona/editar-persona.component';
import { ConsultarPersonaComponent } from './clientes/consultar-persona/consultar-persona.component';
import { EliminarPersonaComponent } from './clientes/eliminar-persona/eliminar-persona.component';
import { CrearInmueblesComponent } from './inmuebles/crear-inmuebles/crear-inmuebles.component';
import { ConsultarInmueblesComponent } from './inmuebles/consultar-inmuebles/consultar-inmuebles.component';
import { EditarInmueblesComponent } from './inmuebles/editar-inmuebles/editar-inmuebles.component';
import { EliminarInmueblesComponent } from './inmuebles/eliminar-inmuebles/eliminar-inmuebles.component';
import { CrearCiudadComponent } from './ciudad/crear-ciudad/crear-ciudad.component';
import { ConsultarCiudadComponent } from './ciudad/consultar-ciudad/consultar-ciudad.component';
import { EditarCiudadComponent } from './ciudad/editar-ciudad/editar-ciudad.component';
import { EliminarCiudadComponent } from './ciudad/eliminar-ciudad/eliminar-ciudad.component';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { ConsultarDepartamentoComponent } from './departamento/consultar-departamento/consultar-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './departamento/eliminar-departamento/eliminar-departamento.component';
import { CrearRolesComponent } from './roles/crear-roles/crear-roles.component';
import { ConsultarRolesComponent } from './roles/consultar-roles/consultar-roles.component';
import { EditarRolesComponent } from './roles/editar-roles/editar-roles.component';
import { CrearEstadoSolicitudComponent } from './estado_solicitud/crear-estado-solicitud/crear-estado-solicitud.component';
import { ConsultarEstadoSolicitudComponent } from './estado_solicitud/consultar-estado-solicitud/consultar-estado-solicitud.component';
import { EditarEstadoSolicitudComponent } from './estado_solicitud/editar-estado-solicitud/editar-estado-solicitud.component';
import { EliminarEstadoSolicitudComponent } from './estado_solicitud/eliminar-estado-solicitud/eliminar-estado-solicitud.component';
import { CrearSolicitudComponent } from './solicitud/crear-solicitud/crear-solicitud.component';
import { ConsultarSolicitudComponent } from './solicitud/consultar-solicitud/consultar-solicitud.component';
import { EditarSolicitudComponent } from './solicitud/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './solicitud/eliminar-solicitud/eliminar-solicitud.component';
import { CrearTipoInmuebleComponent } from './tipo_inmueble/crear-tipo-inmueble/crear-tipo-inmueble.component';
import { ConsultarTipoInmuebleComponent } from './tipo_inmueble/consultar-tipo-inmueble/consultar-tipo-inmueble.component';
import { EditarTipoInmuebleComponent } from './tipo_inmueble/editar-tipo-inmueble/editar-tipo-inmueble.component';
import { EliminarTipoInmuebleComponent } from './tipo_inmueble/eliminar-tipo-inmueble/eliminar-tipo-inmueble.component';
import { EliminarTipoOfertaComponent } from './tipo_oferta/eliminar-tipo-oferta/eliminar-tipo-oferta.component';
import { CrearTipoOfertaComponent } from './tipo_oferta/crear-tipo-oferta/crear-tipo-oferta.component';
import { ConsultarTipoOfertaComponent } from './tipo_oferta/consultar-tipo-oferta/consultar-tipo-oferta.component';
import { EditarTipoOfertaComponent } from './tipo_oferta/editar-tipo-oferta/editar-tipo-oferta.component';
import { CrearCodeudorComponent } from './codeudor/crear-codeudor/crear-codeudor.component';
import { ConsultarCodeudorComponent } from './codeudor/consultar-codeudor/consultar-codeudor.component';
import { EditarCodeudorComponent } from './codeudor/editar-codeudor/editar-codeudor.component';
import { EliminarCodeudorComponent } from './codeudor/eliminar-codeudor/eliminar-codeudor.component';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    ConsultarPersonaComponent,
    EliminarPersonaComponent,
    CrearInmueblesComponent,
    ConsultarInmueblesComponent,
    EditarInmueblesComponent,
    EliminarInmueblesComponent,
    CrearCiudadComponent,
    ConsultarCiudadComponent,
    EditarCiudadComponent,
    EliminarCiudadComponent,
    CrearDepartamentoComponent,
    ConsultarDepartamentoComponent,
    EditarDepartamentoComponent,
    EliminarDepartamentoComponent,
    CrearRolesComponent,
    ConsultarRolesComponent,
    EditarRolesComponent,
    CrearEstadoSolicitudComponent,
    ConsultarEstadoSolicitudComponent,
    EditarEstadoSolicitudComponent,
    EliminarEstadoSolicitudComponent,
    CrearSolicitudComponent,
    ConsultarSolicitudComponent,
    EditarSolicitudComponent,
    EliminarSolicitudComponent,
    CrearTipoInmuebleComponent,
    ConsultarTipoInmuebleComponent,
    EditarTipoInmuebleComponent,
    EliminarTipoInmuebleComponent,
    EliminarTipoOfertaComponent,
    CrearTipoOfertaComponent,
    ConsultarTipoOfertaComponent,
    EditarTipoOfertaComponent,
    CrearCodeudorComponent,
    ConsultarCodeudorComponent,
    EditarCodeudorComponent,
    EliminarCodeudorComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
