import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  ContactComponent,
  ProjectsComponent,
  SkillsComponent,
  EducationComponent,
  ExperienceComponent,
} from './UI';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },

  {
    path: '**',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
