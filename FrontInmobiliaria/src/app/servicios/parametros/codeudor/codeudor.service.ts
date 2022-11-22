import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeudorModel } from 'src/app/Modelos/codeudor.model';
import { SeguridadService } from '../../Shared/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class CodeudorService {

  constructor(
    private http: HttpClient,
    private seguridadCodeudor: SeguridadService
  ) { }

  ConsultarCodeudor():Observable<CodeudorModel[]>{
    return this.http.get<CodeudorModel[]>(`${this.seguridadCodeudor.url}/codeudor`)
  }
}
