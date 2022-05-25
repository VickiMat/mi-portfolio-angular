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
}
