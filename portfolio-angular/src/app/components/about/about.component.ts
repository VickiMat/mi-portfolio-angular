import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash
  persona: any;
  form!:FormGroup;

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.persona=data["Persona"];
    });
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
      document.getElementById("cerrarModalEncabezado")?.click();
    }
  }

}
