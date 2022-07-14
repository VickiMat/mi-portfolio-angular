import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) {

   }
   public getSkill():Observable<Skill>{
    return this.http.get<Skill>(`${this.apiServerUrl}/skill/mostrar`);
  }

  public addSkill(skill:Skill):Observable<Skill>{
    return this.http.post<Skill>(`${this.apiServerUrl}/skill/crear`,skill);
  }

  public updateSkill(skill:Skill):Observable<Skill>{
    return this.http.put<Skill>(`${this.apiServerUrl}/skill/editar`,skill);
  }

  public deleteSkill(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/skill/eliminar/${id}`);
  }
}
