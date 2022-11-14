import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearPersonaComponent } from './clientes/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './clientes/editar-persona/editar-persona.component';
import { ConsultarPersonaComponent } from './clientes/consultar-persona/consultar-persona.component';
import { EliminarPersonaComponent } from './clientes/eliminar-persona/eliminar-persona.component';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    EditarPersonaComponent,
    ConsultarPersonaComponent,
    EliminarPersonaComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
