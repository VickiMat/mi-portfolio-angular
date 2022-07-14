
import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/model/skill.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: any;
  faEdit = faEdit;
  faAdd = faPlus;
  faTrash = faTrash;
  public updateSkill:Skill | undefined;
  public deleteSkill:Skill | undefined;
  public skills:Skill[]=[];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.getSkill
    this.skillService.getSkill().subscribe(data => {
      this.skill = data;
    })
    }
//Mostrar SKILLS
    public getSkill():void{
      this.skillService.getSkill().subscribe({
        next:(Response:Skill[]) => {
          this.skill=Response;
        },
        error:(error:HttpErrorResponse) =>{
          alert(error.message);
        }
      })
    }

    //MODALES
  public onOpenModal(mode:String, skill?: Skill):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-target','#addSkillModal');
    }else if(mode==='delete'){
      this.deleteSkill=skill;
      button.setAttribute('data-target','#deleteSkillModal');
    }else if(mode==='edit'){
      this.updateSkill=skill;
      button.setAttribute('data-target','#editSkillModal');
    }
    container?.appendChild(button);
    button.click();
  }

    //AGREGAR NUEVO PROYECTO

    public onAddSkill(addForm:NgForm){
      this.skillService.addSkill(addForm.value).subscribe({
        next:(response:Skill) => {
          console.log(response);
          this.getSkill();
          addForm.reset();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
          addForm.reset();
        }
      })
      document.getElementById('add-skill-form')?.click();
    }


    //EDITAR PROYECTOS

    public onUpdateSkill(editForm:NgForm){
      this.updateSkill=editForm.value;
      this.skillService.updateSkill(this.updateSkill as Skill).subscribe({
        next:(response:Skill) => {
          console.log(response);
          this.getSkill();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
      document.getElementById('edit-skill-form')?.click();
    }

    //ELIMINAR PROYECTOS

    public onDeleteSkill(id:number):void{
      this.skillService.deleteSkill(id).subscribe({
        next:(response:void) => {
          console.log(response);
          this.getSkill();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
    }

}
