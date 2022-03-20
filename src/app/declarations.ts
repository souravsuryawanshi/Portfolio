import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  AboutComponent,
  ContactComponent,
  FooterComponent,
  NavigationComponent,
  ProjectsComponent,
  SkillsComponent,
  LinksComponent,
  EducationComponent,
  ExperienceComponent,
  BurgerComponent,
} from './UI';

import { DataService } from './Services/data.service';

export const component = [
  AppComponent,
  AboutComponent,
  ContactComponent,
  FooterComponent,
  NavigationComponent,
  ProjectsComponent,
  SkillsComponent,
  LinksComponent,
  EducationComponent,
  ExperienceComponent,
  BurgerComponent,
];

export const imports = [BrowserModule, FormsModule, AppRoutingModule];

export const bootstrap = [AppComponent];

export const providers = [DataService];
