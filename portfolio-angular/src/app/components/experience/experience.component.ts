import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {
  experiencia: any;
  faEdit = faEdit;
  faAdd = faPlus;
  faTrash = faTrash;
  public updateExperiencia:Experiencia | undefined;
  public deleteExperiencia:Experiencia | undefined;
  public experiencias:Experiencia[]=[];
  isLogged = false;

  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    this.getExperiencias
    this.experienciaService.getExperiencia().subscribe(data => {
      this.experiencia = data;
    })

  }
  //Mostrar experiencias
  public getExperiencias():void{
    this.experienciaService.getExperiencia().subscribe({
      next:(Response:Experiencia[]) => {
        this.experiencia=Response;
      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }
    })
  }
   //MODALES
   public onOpenModal(mode:String, experiencia?: Experiencia):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-target','#addExperienciaModal');
    }else if(mode==='delete'){
      this.deleteExperiencia=experiencia;
      button.setAttribute('data-target','#deleteExperienciaModal');
    }else if(mode==='edit'){
      this.updateExperiencia=experiencia;
      button.setAttribute('data-target','#editExperienciaModal');
    }
    container?.appendChild(button);
    button.click();
  }

    //AGREGAR NUEVO PROYECTO

    public onAddExperiencia(addForm:NgForm){
      this.experienciaService.addExperiencia(addForm.value).subscribe({
        next:(response:Experiencia) => {
          console.log(response);
          this.getExperiencias();
          addForm.reset();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
          addForm.reset();
        }
      })
      document.getElementById('add-experiencia-form')?.click();
    }


    //EDITAR Experiencias

    public onUpdateExperiencia(editForm:NgForm){
      this.updateExperiencia=editForm.value;
      this.experienciaService.updateExperiencia(this.updateExperiencia as Experiencia).subscribe({
        next:(response:Experiencia) => {
          console.log(response);
          this.getExperiencias();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
      document.getElementById('edit-experiencia-form')?.click();
    }

    //ELIMINAR Experiencias

    public onDeleteExperiencia(id:number):void{
      this.experienciaService.deleteExperiencia(id).subscribe({
        next:(response:void) => {
          console.log(response);
          this.getExperiencias();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
    }


}
