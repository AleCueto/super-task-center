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
      image: 'https://drive.google.com/uc?export=view&id=1F_zIZQEgCdg-6xAN9UbxnZFNG_LwmHuz'
    },
    {
      id: 1,
      name: 'Estefanía',
      surname: 'Jiménez',
      age: 34,
      image: 'https://drive.google.com/uc?export=view&id=1Q2dh_kkinjUYAYOX4Kya0kwuhzSegwgc'
    },
    {
      id: 2,
      name: 'Laura',
      surname: 'Pérez',
      age: 23,
      image: 'https://drive.google.com/uc?export=view&id=1_Nbs98dofLr8nd8CoychguFbWghwlIaa'
    },
    {
      id: 3,
      name: 'Andrés',
      surname: 'Ramírez',
      age: 20,
      image: 'https://drive.google.com/uc?export=view&id=14NYBqexrAwPR9Q_BcTCSmBObbNO461xx'
    },
    {
      id: 4,
      name: 'Manuela',
      surname: 'Escobar',
      age: 19,
      image: 'https://drive.google.com/uc?export=view&id=1_CCAicgHcb5YkCz90zf_G9-lTfMHdvDx'
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
