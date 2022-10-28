import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from 'src/app/core/models/assignments.model';
import { AssignmentsService } from 'src/app/core/services/assignments.service';
import { PeopleService } from 'src/app/core/services/people.service';
import { TasksService } from 'src/app/core/services/tasks.service';

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

  ngOnInit() {}

}
