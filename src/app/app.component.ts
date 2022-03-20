import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  constructor(private _route: Router) {}

  ngOnInit() {
    // this._route.navigateByUrl('');
    console.log('%c|| Made by an Indian ||', 'color:red; font-size:18px;');
    console.log('%c Sourav Suryawanshi', 'color:orange;');
    console.log(
      '%c This template is inspired by a UI design on Behance by Abhay Chopra',
      'color: white'
    );
    console.log(
      '%c Link to template https://www.behance.net/gallery/120458785/User-Profile-UI',
      'color:green'
    );
  }
}
