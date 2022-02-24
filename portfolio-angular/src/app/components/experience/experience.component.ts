import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencia: any;
  constructor(private miServicio: PortfolioService) { }

  ngOnInit(): void {this.miServicio.obtenerDatosExperiencia().subscribe(data => {
    this.experiencia = data["experience"];
  })
  }

}
