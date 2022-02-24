import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash
  persona: any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.persona=data["Persona"];
    });
  }

}
