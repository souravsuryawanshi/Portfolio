import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experience: any;
  constructor(private _serve: DataService) {}

  ngOnInit() {
    this.experience = this._serve.experience;
  }
}
