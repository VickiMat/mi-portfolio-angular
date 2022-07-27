import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  persona : Persona = new Persona();
  form!:FormGroup;
  public editPersona: Persona | undefined;
  descripcion: String= "";
  nombre! : String;
  apellido! : String;
  titulo! : String;
  img!:String;
  modoEdicionDescripcion = false;
  modoEdicionDatos = false;
  modoEdicionFoto = false;
  botonEdicion= true;
  public archivos: any = []
  isLogged = false;





  constructor(private personaService: PersonaService, private tokenService: TokenService) {}

  ngOnInit(): void{
    this.personaService.getUser().subscribe(data => {
      this.persona = data;
    });
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  };

  public getUser():void{
    this.personaService.getUser().subscribe({
      next: (response:Persona) =>{
        this.persona=response;
      },
      error:(error:HttpErrorResponse)=>
      alert(error.message)
    })
  }

/* EDITAR DESCRIPCION */
  editAboutMeDesc(){
    this.modoEdicionDescripcion=true;
    this.botonEdicion=false;
    this.descripcion = this.persona.descripcion;
  }

  guardarAboutMeDesc(){
    this.persona.descripcion = this.descripcion;
    this.personaService.updatePersonaDescripcion(this.persona).subscribe({
      next:(response:Persona) => {
        console.log(response);
        this.getUser();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
    this.modoEdicionDescripcion=false;
    this.botonEdicion = true;
  }
  cerrarAboutMeDesc(){
    this.modoEdicionDescripcion=false;
    this.botonEdicion = true;
  }


/*EDITAR DATOS PERSONALES */
  editAboutMeDatos(){
    this.modoEdicionDatos = true;
    this.botonEdicion = false;
    this.nombre = this.persona.nombre;
    this.apellido = this.persona.apellido;
    this.titulo = this.persona.titulo;
  }

  guardarAboutMeDatos(){
    this.persona.nombre = this.nombre;
    this.persona.apellido = this.apellido;
    this.persona.titulo = this.titulo;
    this.personaService.updatePersonaDatos(this.persona).subscribe({
      next:(response:Persona) => {
        console.log(response);
        this.getUser();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
    this.modoEdicionDatos=false;
    this.botonEdicion = true;
  }
  cerrarAboutMeDatos(){
    this.modoEdicionDatos=false;
    this.botonEdicion = true;
  }

//EDITAR FOTO PERFIL
editAboutMeFoto(){
  this.modoEdicionFoto = true;
  this.botonEdicion = false;
  this.img = this.persona.img;
}


guardarAboutMeFoto(){
  this.persona.img = this.img
  this.personaService.updatePersonaFoto(this.persona).subscribe({
    next:(response:Persona) => {
      console.log(response);
      this.getUser();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  })
  this.modoEdicionFoto=false;
  this.botonEdicion = true;
}
cerrarAboutMeFoto(){
  this.modoEdicionFoto=false;
  this.botonEdicion = true;
}

}
