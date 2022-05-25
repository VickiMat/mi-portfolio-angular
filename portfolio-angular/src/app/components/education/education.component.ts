import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/services/educacion.service';


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
  educationForm: FormGroup;

  constructor(private educacionService: EducacionService,
    private formBuilder: FormBuilder) {

//agregar mas validaciones
        this.educationForm = this.formBuilder.group({
          id: [''],
          nombre_titulo: ['', [Validators.required]],
          año: ['', [Validators.required]],
          logo: ['', [Validators.required]],
          instituto: ['', [Validators.required]],
          certificado: ['', [Validators.required]],
        })
     }

  ngOnInit(): void {
    this.educacionService.getEducation().subscribe(data => {
      this.educacion = data;
    })
  }

  private clearForm(){
    this.educationForm.setValue({
      id: '',
      nombre_titulo: '',
      año: '',
      logo: '',
      instituto: '',
      certificado: ''
    })
  }

 /* onSubmit(){
    let educacion: any = this.educationForm.value;
    this.miServicio.guardarNuevaEducacion(educacion).subscribe(
      (newEducation: Educacion) => {
        this.educacionList.push(newEducacion);
      }
    );
  } */

  onNewEducation(){
    this.clearForm();
  }

}
