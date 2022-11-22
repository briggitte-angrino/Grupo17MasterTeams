import { Component, OnInit } from '@angular/core';
import { CiudadModel } from 'src/app/Modelos/ciudad.model';
import { CiudadService } from 'src/app/servicios/parametros/ciudad/ciudad.service';

@Component({
  selector: 'app-consultar-ciudad',
  templateUrl: './consultar-ciudad.component.html',
  styleUrls: ['./consultar-ciudad.component.css']
})
export class ConsultarCiudadComponent implements OnInit {

  listaCiudad: CiudadModel[]=[];

  constructor(
    private servicioCiudad: CiudadService
  ) { }

  ngOnInit(): void {
    this.consutar();
  }

  consutar(){
    this.servicioCiudad.ConsultarCiudad().subscribe({
      next:(datos: CiudadModel[])=>{
        this.listaCiudad = datos;
      },
      error:(e)=> console.log(e)
    })
  }
}
