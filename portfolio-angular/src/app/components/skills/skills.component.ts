
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { SkillService } from 'src/app/services/skill.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: any;
  faEdit = faEdit;
  faAdd = faPlus;
  faTrash = faTrash;

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillService.getSkill().subscribe(data => { this.skill = data; })
  }

}
