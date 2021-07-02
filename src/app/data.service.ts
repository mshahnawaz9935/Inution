import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor() { }
  todo = [
    'Get to work',
    'Buy Lunch',
    'Go home',
    'Fall asleep'
  ];
  started = [
    'UI',
    'Design',
    'C#',
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
  ];
}
