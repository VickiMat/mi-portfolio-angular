import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
   persona! : Persona;
  form!:FormGroup;
  public editPersona: Persona | undefined;
  descripcion! : String;



  constructor(private personaService: PersonaService) {}

  ngOnInit(): void{
    this.personaService.getUser().subscribe(data => {
      this.persona = data;
    });
  }

  public getUser():void{
    this.personaService.getUser().subscribe({
      next: (response:Persona) =>{
        this.persona=response;
      },
      error:(error:HttpErrorResponse)=>
      alert(error.message)
    })
  }

  editAboutMe(){

  }

  guardarAboutMe(){
    this.persona.descripcion = this.descripcion;

  }
  displayStyle = "none";

  openForm() {
    this.displayStyle = "block";
  }
  closeForm() {
    this.displayStyle = "none";
  }

  guardarCambios(){
    if(this.form.valid)
    {
      this.form.reset();

      this.persona.descripcion='trodnrejewl'
      document.getElementById("cerrarModalEncabezado")?.click();
    }
  }
}
