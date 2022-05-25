import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  private apiServerUrl=environment.apiBaseUrl;



  constructor(private http: HttpClient) {
    console.log("El servicio de persona esta corriendo");
  }

  public getUser():Observable<Persona>{
    return this.http.get<Persona>(`${this.apiServerUrl}/personas/traer/perfil/1`);
  }

  public updatePersona(persona: Persona):Observable<Persona>{
    return this.http.put<Persona>(`${this.apiServerUrl}/personas/editar`,persona);
  }

  }

