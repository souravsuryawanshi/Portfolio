import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {
  //just for toggling, from here ...
  status = new Subject<boolean>();
  setClicked() {
    if (localStorage.getItem('clicked') === 'yes') {
      localStorage.setItem('clicked', 'no');
      this.status.next(false);
      return;
    }
    localStorage.setItem('clicked', 'yes');
    this.status.next(true);
  }

  getClickStatus() {
    return localStorage.getItem('clicked') === 'yes';
  } //till here

  education = [
    {
      class: 'B.Tech. (Computer Science)',
      institute: 'Shri Govindram Institute of Technology and Science, Indore',
      year: '2018-2022',
      grades: '7.38 (CGPA)',
    },
    {
      class: '12th',
      institute: 'School for Excellence, Dewas',
      year: '2017-2018',
      grades: '91.80%',
    },
    {
      class: '10th',
      institute: 'School for Excellence, Dewas',
      year: '2015-2016',
      grades: '95.50%',
    },
  ];

  projects = [
    {
      name: '',
      description: '',
      link: '',
    },
  ];

  skills = {
    languages: ['Java', 'JavaScript', 'TypeScript'],

    subjects: [
      'Data Structures and Algorithms',
      'Operating Systems',
      'Database Management Systems',
      'Object-Oriented Programming',
      'Computer Networks',
    ],

    tools: [
      'HTML5',
      'CSS3',
      'Angular',
      'Node',
      'React.js',
      'Express.js',
      'Git',
      'GitHub',
    ],
  };
}
