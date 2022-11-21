import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatosSesionModel } from 'src/app/Modelos/datos-sesion.model';
import { SeguridadService } from 'src/app/servicios/Shared/seguridad.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  img = 'https://github.com/Edirain6/Frontend_Nucleo_Prueba/blob/main/image/NucleoLogo/Group%2011.png?raw=true'

  sesionActiva:boolean=false;
  subscription:Subscription=new Subscription();

  constructor(
    private servicioSeguridad:SeguridadService
  ) { }

  ngOnInit(): void {
    this.EstadoSesion();
  }

  EstadoSesion(){
    this.subscription=this.servicioSeguridad.ObtenerInfoSesion().subscribe({
      next: (data: DatosSesionModel)=>{
        this.sesionActiva=data.isLoggIn;
      }
    })
  }
}
