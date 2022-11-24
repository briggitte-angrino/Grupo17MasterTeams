import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { inmuebleModel } from 'src/app/Modelos/inmuebles.model';
import { InmueblesService } from 'src/app/servicios/parametros/inmuebles/inmuebles.service';

@Component({
  selector: 'app-editar-inmuebles',
  templateUrl: './editar-inmuebles.component.html',
  styleUrls: ['./editar-inmuebles.component.css']
})
export class EditarInmueblesComponent implements OnInit {
  
  img = 'https://github.com/Edirain6/Frontend_Nucleo_Prueba/blob/main/image/LOGO_Principal.png?raw=true';

  formularioEdicion: FormGroup = new FormGroup({});

  

  constructor(
    private fb: FormBuilder,
    private servicioInmueble: InmueblesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  construccionFormulario(){
    this.formularioEdicion= this.fb.group({
      precio:["", [Validators.required]],
      direccion:["", [Validators.required]],
      imagen:["", [Validators.required]],
      linkyoutube:["", [Validators.required]]
    });
  }

  ConsultaInmueble(){
    let id = this.route.snapshot.params["id"];
    this.servicioInmueble.ConsultarInmueble(id).subscribe({
      next: (datos: inmuebleModel)=>{
        this.formularioEdicion.controls["direccion"].setValue(datos.direccion);
        this.formularioEdicion.controls["imagen"].setValue(datos.imagen);
        this.formularioEdicion.controls["linkyoutube"].setValue(datos.linkyoutube);
      },
      error: (e) => console.log(e)
    })
  }

  Editar(){
     
    

  }

}
