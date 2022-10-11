import { Component, Input, OnInit } from '@angular/core';
import { PeopleService} from 'src/app/services/people.service';
import { Person } from 'src/app/models/person.model';
import { PersonComponent } from 'src/app/components/person/person.component';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})
export class PersonsPage implements OnInit {
  people: Person;

  constructor(private person: PeopleService ) { }

  
  ngOnInit() {
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }


  getPeople(): Person[] {
    return this.person.getPeople();
  }

}
