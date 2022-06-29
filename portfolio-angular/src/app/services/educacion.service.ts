import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) {
    console.log("El servicio funciona");
  }

  public getEducation():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/1`);
  }

  public addEducation(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiServerUrl}/educacion/crear`,educacion);
  }

  public updateEducation(educacion:Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/editar/${educacion.id}`,educacion);
  }

  public deleteEducation(educacionId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/educacion/eliminar/${educacionId}`);
  }

}
