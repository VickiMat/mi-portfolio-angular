import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;

  persona: any;

  faEdit = faEdit;

  constructor(private datosPortfolio: PortfolioService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.persona=data["Persona"];
    });
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
}
