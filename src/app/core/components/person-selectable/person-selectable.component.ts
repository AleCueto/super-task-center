import { Component, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordion, IonAccordionGroup } from '@ionic/angular';
import { Person } from '../../models/person.model';
import { PeopleService } from '../../services/people.service';

export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PersonSelectableComponent),
  multi: true
};
@Component({
  selector: 'app-person-selectable',
  templateUrl: './person-selectable.component.html',
  styleUrls: ['./person-selectable.component.scss'],
  providers: [USER_PROFILE_VALUE_ACCESSOR]
})
export class PersonSelectableComponent implements OnInit, ControlValueAccessor {

  selectedPerson = null;

  constructor(
    private peopleSvc:PeopleService
  ) { }


  ngOnInit() {}

  getPeople(){
    return this.peopleSvc.getPeople();
  }

  onPersonClicked(person:Person, accordion:IonAccordionGroup){
    this.selectedPerson = person;
    accordion.value='';
    this.propagateChange(this.selectedPerson.id);
  }

  //propagate changes into the custom form control
  propagateChange = (_: any) => { }

  //From ControlValueAccessor interface
  writeValue(value: any) {
      this.selectedPerson = this.peopleSvc.getPeopleById(value);
      // console.log("eferf");
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
      this.propagateChange = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {

  }
}
