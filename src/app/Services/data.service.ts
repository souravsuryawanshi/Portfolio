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

  hidePage() {
    localStorage.setItem('clicked', 'no');
    this.status.next(false);
  }

  getClickStatus() {
    return localStorage.getItem('clicked') === 'yes';
  } //till here

  education = [
    {
      class: 'B.Tech. (Computer Science)',
      institute:
        'Shri Govindram Seksaria Institute of Technology and Science, Indore',
      year: '2018-2022',
      grades: '7.38 (CGPA)',
    },
    {
      class: 'Higher Secondary',
      institute: 'School for Excellence, Dewas',
      year: '2017-2018',
      grades: '91.80%',
    },
    {
      class: 'High School',
      institute: 'School for Excellence, Dewas',
      year: '2015-2016',
      grades: '95.50%',
    },
  ];

  projects = [
    {
      title: 'SmartBrain',
      tech: ['React.js', 'Node', 'Express.js', 'PostgreSQL'],
      image: '../../assets/asset/chat_circle_bubble_message_icon_149512.png',
      url: '#',
    },
    {
      title: 'Portfolio',
      tech: ['Angular', 'Node'],
      image: '../../assets/asset/instagram_logo_icon_186929.png',
      url: '#',
    },
  ];

  experience = [
    {
      company: 'Airtel Africa Digital Labs',
      duration: 'Jan 2021 - Present',
      role: 'Frontend Developer Intern',
      worked_on: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular'],
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

    web: [
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
