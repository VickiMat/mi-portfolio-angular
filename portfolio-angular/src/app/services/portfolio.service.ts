import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/persona.json');
  }

  obtenerDatosExperiencia():Observable<any>{
    return this.http.get('./assets/data/experience.json');
  }

  obtenerDatosProyectos():Observable<any>{
    return this.http.get('./assets/data/proyecto.json');
  }

  obtenerDatosSkills():Observable<any>{
    return this.http.get('./assets/data/skills.json');
  }

  obtenerDatosEducacion():Observable<any>{
    return this.http.get('./assets/data/educacion.json');
  }

}
