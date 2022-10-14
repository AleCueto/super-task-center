import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeopleService} from 'src/app/services/people.service';
import { Person } from 'src/app/models/person.model';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
})
export class PersonDetailComponent implements OnInit {
  people: Person;
  form:FormGroup;

  mode:"New" | "Edit" = "New";
  @Input('person') set person(person:Person){
    if(person){
      this.form.controls.id.setValue(person.id);
      this.form.controls.name.setValue(person.name);
      this.form.controls.surname.setValue(person.surname);
      this.form.controls.age.setValue(person.age);
      // this.form.controls.picture.setValue(person.picture);
      this.mode = "Edit";
    }
  }

  constructor(private personSVC: PeopleService, private fb:FormBuilder, private modal:ModalController) {
    this.form = this.fb.group({
      id:[null],
      name:['', [Validators.required]],
      surname:['', [Validators.required]],
      nickname:['', [Validators.required]],
      age:['', [Validators.required]],
      picture:['']
    });

  }

  ngOnInit() {
  }

  createPerson(){
    console.log(this.form.value); //It is called when push the form button
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  //   onSubmit(){
    
  //   this.modal.dismiss({person: this.form.value, mode:this.mode}, 'ok');
  // }

  getPeople(): Person[] {
    return this.personSVC.getPeople();
  }

}
