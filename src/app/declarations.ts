import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  AboutComponent,
  BlogsComponent,
  ContactComponent,
  FooterComponent,
  NavigationComponent,
  PathComponent,
  ProjectsComponent,
  SkillsComponent,
  RefreshComponent,
  LinksComponent,
  EducationComponent,
  ExperienceComponent,
} from './UI';

import { DataService } from './Services/data.service';

export const component = [
  AppComponent,
  AboutComponent,
  BlogsComponent,
  ContactComponent,
  FooterComponent,
  NavigationComponent,
  ProjectsComponent,
  SkillsComponent,
  PathComponent,
  RefreshComponent,
  LinksComponent,
  EducationComponent,
  ExperienceComponent,
];

export const imports = [BrowserModule, FormsModule, AppRoutingModule];

export const bootstrap = [AppComponent];

export const providers = [DataService];
