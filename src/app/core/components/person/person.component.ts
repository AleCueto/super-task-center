import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/core/models/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  @Input() personInput: Person;

  constructor() { }

  ngOnInit() {}


}
