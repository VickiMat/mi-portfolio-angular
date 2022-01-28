import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faEdit = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

}
