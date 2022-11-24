import { Component, OnInit } from '@angular/core';
import { inmuebleModel } from 'src/app/Modelos/inmuebles.model';
import { InmueblesService } from 'src/app/servicios/parametros/inmuebles/inmuebles.service';

@Component({
  selector: 'app-consultar-inmuebles',
  templateUrl: './consultar-inmuebles.component.html',
  styleUrls: ['./consultar-inmuebles.component.css']
})
export class ConsultarInmueblesComponent implements OnInit {

  

  listaInmuebles: inmuebleModel[]=[];

  constructor(
    private servicioInmueble:InmueblesService
  ) { }

  ngOnInit(): void {
    this.Consultar();
  }

  Consultar(){
    this.servicioInmueble.ConsultarInmuebles().subscribe({
      next: (datos: inmuebleModel[])=>{
        this.listaInmuebles=datos;
      },
      error: (e: any)=> console.log(e)
    })
  }

}