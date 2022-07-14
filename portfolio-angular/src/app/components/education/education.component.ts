import { Component, OnInit } from '@angular/core';
import { faEdit, faThumbsDown, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from 'src/app/model/educacion.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educacion: any;
  faEdit = faEdit;
  faAdd = faPlus;
  faTrash = faTrash;
  public editEducation:Educacion | undefined;
  public deleteEducation:Educacion | undefined;
  public educations:Educacion[]=[];

  constructor(private educacionService: EducacionService) {


     }

  ngOnInit(): void {
    this.getEducations
    this.educacionService.getEducation().subscribe(data => {
      this.educations = data;
    })
  }
//traer educaciones
  public getEducations():void{
    this.educacionService.getEducation().subscribe({
      next:(Response:Educacion[]) => {
        this.educations=Response;
      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }
    })
  }
//MODALES
  public onOpenModal(mode:String, educacion?: Educacion):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-target','#addEducationModal');
    }else if(mode==='delete'){
      this.deleteEducation=educacion;
      button.setAttribute('data-target','#deleteEducationModal');
    }else if(mode==='edit'){
      this.editEducation=educacion;
      button.setAttribute('data-target','#editEducationModal');
    }
    container?.appendChild(button);
    button.click();
  }

  //AGREGAR NUEVA EDUCACION
  public onAddEducation(addForm:NgForm){
    this.educacionService.addEducation(addForm.value).subscribe({
      next:(response:Educacion) => {
        console.log(response);
        this.getEducations();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
    document.getElementById('add-education-form')?.click();
  }

  //EDITAR EDUCACIONES
  public onUpdateEducation(editForm:NgForm){
    this.editEducation=editForm.value;
    this.educacionService.updateEducation(this.editEducation as Educacion).subscribe({
      next:(response:Educacion) => {
        console.log(response);
        this.getEducations();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
    document.getElementById('edit-education-form')?.click();
  }

  public onDeleteEducation(idEdu:number):void{
    this.educacionService.deleteEducation(idEdu).subscribe({
      next:(response:void) => {
        console.log(response);
        this.getEducations();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
