import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto.model';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenService } from 'src/app/services/token.service';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proyecto: any;
  faTrash = faTrash;
  faedit = faEdit;
  faplus = faPlus;
  public updateProyecto:Proyecto | undefined;
  public deleteProyecto:Proyecto | undefined;
  public proyectos:Proyecto[]=[];
  isLogged = false;

  constructor(private proyectoService: ProyectoService,
    private formBuilder:FormBuilder,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    this.getProyectos
    this.proyectoService.getProyecto().subscribe(data => {
      this.proyecto = data;
    })
    }
//Mostrar PROYECTOS
    public getProyectos():void{
      this.proyectoService.getProyecto().subscribe({
        next:(Response:Proyecto[]) => {
          this.proyecto=Response;
        },
        error:(error:HttpErrorResponse) =>{
          alert(error.message);
        }
      })
    }

    //MODALES
  public onOpenModal(mode:String, proyecto?: Proyecto):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-target','#addProyectoModal');
    }else if(mode==='delete'){
      this.deleteProyecto=proyecto;
      button.setAttribute('data-target','#deleteProyectoModal');
    }else if(mode==='edit'){
      this.updateProyecto=proyecto;
      button.setAttribute('data-target','#editProyectoModal');
    }
    container?.appendChild(button);
    button.click();
  }

    //AGREGAR NUEVO PROYECTO

    public onAddProyecto(addForm:NgForm){
      this.proyectoService.addProyecto(addForm.value).subscribe({
        next:(response:Proyecto) => {
          console.log(response);
          this.getProyectos();
          addForm.reset();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
          addForm.reset();
        }
      })
      document.getElementById('add-proyecto-form')?.click();
    }


    //EDITAR PROYECTOS

    public onUpdateProyecto(editForm:NgForm){
      this.updateProyecto=editForm.value;
      this.proyectoService.updateProyecto(this.updateProyecto as Proyecto).subscribe({
        next:(response:Proyecto) => {
          console.log(response);
          this.getProyectos();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
      document.getElementById('edit-proyecto-form')?.click();
    }

    //ELIMINAR PROYECTOS

    public onDeleteProyecto(id:number):void{
      this.proyectoService.deleteProyecto(id).subscribe({
        next:(response:void) => {
          console.log(response);
          this.getProyectos();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })
    }

}
