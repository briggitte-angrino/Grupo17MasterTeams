import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartamentoModel } from 'src/app/Modelos/departamento.model';
import { SeguridadService } from '../../Shared/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(
    private http: HttpClient,
    private SeguridadDeparamento: SeguridadService
  ) { }

  ConsultarDepartamento():Observable<DepartamentoModel[]>{
    return this.http.get<DepartamentoModel[]>(`${this.SeguridadDeparamento.url}/departamentos`)
  }
}
