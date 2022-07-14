import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) {
    console.log("Servicio proyecto corriendo");
   }

   public getProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.apiServerUrl}/proyecto/mostrar`);
  }

  public addProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.apiServerUrl}/proyecto/crear`,proyecto);
  }

  public updateProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.apiServerUrl}/proyecto/editar`,proyecto);
  }

  public deleteProyecto(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/proyecto/eliminar/${id}`);
  }

}
