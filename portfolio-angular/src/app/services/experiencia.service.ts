import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) {
  }

  public getExperiencia():Observable<Experiencia>{
    return this.http.get<Experiencia>(`${this.apiServerUrl}/experiencia/mostrar`);
  }
}
