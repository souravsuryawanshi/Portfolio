import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: any;

  constructor(private _serve: DataService) {}

  ngOnInit() {
    this.skills = this._serve.skills;
  }
}
