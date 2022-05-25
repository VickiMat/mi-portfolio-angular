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

  public getEducation():Observable<Educacion>{
    return this.http.get<Educacion>(`${this.apiServerUrl}/educacion/1`);
  }

}
