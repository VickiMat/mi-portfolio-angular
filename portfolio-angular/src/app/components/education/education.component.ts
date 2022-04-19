import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private miServicio: PortfolioService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosEducacion().subscribe(data => {
      this.educacion = data["educacion"];
    })
  }

}
