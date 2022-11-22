import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CiudadModel } from 'src/app/Modelos/ciudad.model';
import { SeguridadService } from '../../Shared/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(
    private http: HttpClient,
    private servicioSeguridad: SeguridadService
  ) { }

  ConsultarCiudad():Observable<CiudadModel[]>{
    return this.http.get<CiudadModel[]>(`${this.servicioSeguridad.url}/ciudad`)
  }
}
