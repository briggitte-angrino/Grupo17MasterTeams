import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredencialesModel } from 'src/app/Modelos/credenciales.model';
import { DatosSesionModel } from 'src/app/Modelos/datos-sesion.model';
import { LocalStorageService } from 'src/app/servicios/Shared/local-storage.service';
import { SeguridadService } from 'src/app/servicios/Shared/seguridad.service';
const CryptoJS = require('crypto-js');
declare const GenerarVentanaModal:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  img = 'https://github.com/Edirain6/Frontend_Nucleo_Prueba/blob/main/image/LOGO_Principal.png?raw=true';

  formularioLogin: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private servicioLocalStorage: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ConstruccionFormulario();
  }

  ConstruccionFormulario() {
    this.formularioLogin = this.fb.group({
      usuario: ["angrinobriggitte@gmail.com",[Validators.required, Validators.email]],
      pass: ["123456",[Validators.required, Validators.minLength(8)]]
    });
  }

  Login() {
    if (this.formularioLogin.invalid) {
      GenerarVentanaModal("Los datos ingresados no son validos... intenta nuevamente.")
    } else {
      let credenciales: CredencialesModel = new CredencialesModel();
      credenciales.usuario=this.formularioLogin.controls['usuario'].value;
      credenciales.password=CryptoJS.MD5(this.formularioLogin.controls['pass'].value).toString();
      this.servicioSeguridad.Login(credenciales).subscribe({
        next: (data:DatosSesionModel)=>{
          console.log(data);
          let guardar=this.servicioLocalStorage.GuardarDatosSesion(data);
          data.isLoggIn=true;
          this.servicioSeguridad.RefrescarDatosSesion(data);
          this.router.navigate(['/home'])
        },
        error: (e)=>console.log(e)
      });

    }
  }
}
