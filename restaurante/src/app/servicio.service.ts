import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from './servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  //Listado de servicios 
  private baseURL="http://localhost:8080/api/servicio";

  constructor(private httpClient: HttpClient) { }
  
  //obetener lista de servicios
  obtenerListaDeServicios():Observable<Servicio[]>{
  return this.httpClient.get<Servicio[]>(`${this.baseURL}`)
}
}
