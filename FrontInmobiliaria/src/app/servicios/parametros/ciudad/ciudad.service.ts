import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CiudadModel } from 'src/app/Modelos/ciudad.model';
import { SeguridadService } from '../../Shared/seguridad.service';
import { LocalStorageService} from '../../Shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(
    private http: HttpClient,
    private servicioSeguridad: SeguridadService,
    private servicioLocalStorage : LocalStorageService
  ) { }

  ConsultarCiudad():Observable<CiudadModel[]>{
    return this.http.get<CiudadModel[]>(`${this.servicioSeguridad.url}/ciudad`)
  }

  EditarCiudad(ciudad: CiudadModel){
    return this.http.put(`${this.servicioSeguridad.url}/ciudad/${ciudad.id}`,
    {
        id : ciudad.id,
        nombre: ciudad.nombreCiudad,
        Headers: new HttpHeaders({
         Authoriation:`Bearer ${this.servicioLocalStorage.ObtenerToken}`
        })
    })
  }
}
