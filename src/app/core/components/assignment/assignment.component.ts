import { Component, Input, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Assignment } from 'src/app/core/models/assignments.model';
import { AssignmentsService } from 'src/app/core/services/assignments.service';
import { PeopleService } from 'src/app/core/services/people.service';
import { TasksService } from 'src/app/core/services/tasks.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
}) 
export class AssignmentComponent implements OnInit {
  @Input() assignmentInput:Assignment;

  constructor(private assignmentSVC:AssignmentsService,
    private taskSVC:TasksService,
    private personSVC:PeopleService) { 
  }

  
  getPerson(id)
  {
    return this.personSVC.getPeopleById(id);
  }

  getTask(id)
  {
    return this.taskSVC.getTasksById(id);
  }


  // getPerson():Person{
  //   console.log(new Date().toISOString());
  //   var personId = this.assignmentInput.id_person;
  //   if(personId)
  //     return this.personSVC.getPeopleById(personId);
  //   return undefined;
  // }

  // onEditClick(slide:IonItemSliding){
  //   slide.close();
    // this.onEdit.emit(this.assignment);
  // }

  
  ngOnInit() {}

}
