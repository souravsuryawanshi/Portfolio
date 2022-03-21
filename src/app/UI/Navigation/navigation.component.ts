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
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    // this._route.navigateByUrl('');
    // this.toggle = false;
  }

  navigateToProfile() {
    this._route.navigateByUrl('');
    this._serve.setClicked();
    // this.toggle = false;
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
  navigateToEducation() {
    this._route.navigateByUrl('education');
    this._serve.setClicked();
    // this.toggle = false;
    document
      .getElementById('education')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  navigateToProjects() {
    this._route.navigateByUrl('projects');
    this._serve.setClicked();
    // this.toggle = false;
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  navigateToExperience() {
    this._route.navigateByUrl('experience');
    this._serve.setClicked();
    // this.toggle = false;
    document
      .getElementById('experience')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  navigateToSkills() {
    this._route.navigateByUrl('skills');
    this._serve.setClicked();
    // this.toggle = false;
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  }

  navigateToContact() {
    this._route.navigateByUrl('contact');
    this._serve.setClicked();
    // this.toggle = false;
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  onBurgerClick() {
    this._serve.setClicked();
    // this.toggle = !this.toggle;
  }
}
