import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private miServicio: PortfolioService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosExperiencia().subscribe(data => {
      this.experiencia = data["experience"];
    })
  }

}
