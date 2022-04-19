import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';



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

  constructor(private miServicio: PortfolioService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosProyectos().subscribe(data => {
      this.proyecto = data["proyecto"];
    })
  }
}
