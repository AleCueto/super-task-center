import { Component, Input, OnInit } from '@angular/core';
import { PeopleService} from 'src/app/services/people.service';
import { Person } from 'src/app/models/person.model';
import { PersonComponent } from 'src/app/components/person/person.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.page.html',
  styleUrls: ['./persons.page.scss'],
})
export class PersonsPage implements OnInit {
  people: Person;
  form:FormGroup;

  constructor(private person: PeopleService, private fb:FormBuilder ) {
    this.form = this.fb.group({
      name:'',
      surname:''
    });
  }

  createPerson(){
    console.log(this.form.value); //It is called when push the form button
  }

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
