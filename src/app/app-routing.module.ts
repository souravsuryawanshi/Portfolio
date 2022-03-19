import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  BlogsComponent,
  ContactComponent,
  ProjectsComponent,
  SkillsComponent,
  PathComponent,
  RefreshComponent,
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
    path: 'blogs',
    component: BlogsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'refresh',
    component: RefreshComponent,
  },
  {
    path: '**',
    component: PathComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
