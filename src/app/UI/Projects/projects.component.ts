import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: any;

  constructor(private _serve: DataService) {}

  ngOnInit() {
    this.projects = this._serve.projects;
  }
}
