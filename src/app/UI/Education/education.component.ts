import { Component } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  education: any[] = [];

  constructor(private _serve: DataService) {}

  ngOnInit() {
    this.education = this._serve.education;
  }
}
