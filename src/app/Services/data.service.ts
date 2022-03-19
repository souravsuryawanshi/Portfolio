import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  projects = [
    {
      name: '',
      description: '',
      link: '',
    },
  ];

  skills = [
    {
      name: '',
      image: '',
    },
  ];
}
