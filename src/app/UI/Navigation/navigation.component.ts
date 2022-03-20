import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  // toggle: boolean = false;
  //_serve and ngonint is service used code,  previous code is commented

  toggle: any;
  constructor(private _route: Router, private _serve: DataService) {}

  ngOnInit() {
    this._serve.status.subscribe((res) => (this.toggle = res));
    this.toggle = this._serve.getClickStatus();
  }
  navigateToHome() {
    this._route
      .navigateByUrl('refresh', { skipLocationChange: true })
      .then(() => {
        this._route.navigateByUrl('');
      });
    // this._route.navigateByUrl('');
    // this.toggle = false;
  }

  navigateToProfile() {
    this._route.navigateByUrl('');
    this._serve.setClicked();
    // this.toggle = false;
  }
  navigateToEducation() {
    this._route.navigateByUrl('education');
    this._serve.setClicked();
    // this.toggle = false;
  }

  navigateToProjects() {
    this._route.navigateByUrl('projects');
    this._serve.setClicked();
    // this.toggle = false;
  }

  navigateToExperience() {
    this._route.navigateByUrl('experience');
    this._serve.setClicked();
    // this.toggle = false;
  }

  navigateToSkills() {
    this._route.navigateByUrl('skills');
    this._serve.setClicked();
    // this.toggle = false;
  }

  navigateToContact() {
    this._route.navigateByUrl('contact');
    this._serve.setClicked();
    // this.toggle = false;
  }

  onBurgerClick() {
    this._serve.setClicked();
    // this.toggle = !this.toggle;
  }
}
