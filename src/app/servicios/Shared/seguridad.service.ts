import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CredencialesModel } from 'src/app/Modelos/credenciales.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url:string="http://localhost:3000"

  constructor(
    private http: HttpClient
  ) { }

    Login(credenciales: CredencialesModel):Observable<any>{
      return this.http.post(`${this.url}/Login`,credenciales);
    }

}
