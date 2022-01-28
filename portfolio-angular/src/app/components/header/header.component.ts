import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  persona: any;

  faEdit = faEdit;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data)
      this.persona=data["Persona"];
    });
  }
}
