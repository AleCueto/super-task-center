import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  public people: Person[] = [
    {
      id: 0,
      name: 'María',
      surname: 'García',
      age: 43,
      image: ''
    },
    {
      id: 1,
      name: 'Estefanía',
      surname: 'Jiménez',
      age: 33,
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 2,
      name: 'Antonio',
      surname: 'Pérez',
      age: 23,
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 3,
      name: 'Andrés',
      surname: 'Ramírez',
      age: 20,
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 4,
      name: 'Rosalía',
      surname: 'Escobar',
      age: 19,
      image: 'https://picsum.photos/200/300'
    },
  ]
  constructor() { }

  public getPeople(): Person[] {
    return this.people;
  }

  public getPeopleById(id: number): Person{
    return this.people[id];
  }

}
