import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './general/login/login.component';
import { CambiarPassComponent } from './general/cambiar-pass/cambiar-pass.component';
import { RecuperarPassComponent } from './general/recuperar-pass/recuperar-pass.component';
import { CrearUserComponent } from './usuarios/crear-user/crear-user.component';
import { EditarUserComponent } from './usuarios/editar-user/editar-user.component';
import { ConsultarUserComponent } from './usuarios/consultar-user/consultar-user.component';
import { EliminarUserComponent } from './usuarios/eliminar-user/eliminar-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './general/logout/logout.component';


@NgModule({
  declarations: [
    LoginComponent,
    CambiarPassComponent,
    RecuperarPassComponent,
    CrearUserComponent,
    EditarUserComponent,
    ConsultarUserComponent,
    EliminarUserComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
