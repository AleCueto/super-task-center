import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  public _people: Person[] = [
    {
      id: 0,
      name: 'María',
      surname: 'García',
      age: 43,
      image: 'https://thispersondoesnotexist.com/image'
    },
    {
      id: 1,
      name: 'Estefanía',
      surname: 'Jiménez',
      age: 34,
      image: 'https://thispersondoesnotexist.com/image'
    },
    {
      id: 2,
      name: 'Laura',
      surname: 'Pérez',
      age: 23,
      image: 'https://thispersondoesnotexist.com/image'
    },
    {
      id: 3,
      name: 'Andrés',
      surname: 'Ramírez',
      age: 20,
      image: 'https://thispersondoesnotexist.com/image'
    },
    {
      id: 4,
      name: 'Manuela',
      surname: 'Escobar',
      age: 19,
      image: 'https://thispersondoesnotexist.com/image'
    },
  ]

  id:number = this._people.length+1;
  constructor() { }

  public getPeople(): Person[] {
    return this._people;
  }

  public getPeopleById(id: number): Person{
    return this._people[id];
  }

  addPerson(person:Person){
    person.id = this.id++;
    this._people.push(person);
  }

  updatePerson(person:Person){
    var _person = this._people.find(p=>p.id==person.id);
    if(_person){
      _person.name = person.name;
      _person.surname = person.surname;
      _person.age = person.age;
      // _person.nickname = person.nickname;
      // _person.picture = person.picture;
    }
    
  }

  deletePersonById(id:number){
    this._people = this._people.filter(p=>p.id != id); 
  }


}
