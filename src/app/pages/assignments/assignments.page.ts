import { Component, OnInit } from '@angular/core';
import { AssignmentComponent } from 'src/app/components/assignment/assignment.component';
import { AppComponent } from 'src/app/app.component';
import { AssignmentsService } from 'src/app/services/assignments.service';
import { Assignment } from 'src/app/models/assignments.model';
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.page.html',
  styleUrls: ['./assignments.page.scss'],
})
export class AssignmentsPage implements OnInit {
  assignment:Assignment;

  constructor( 
    private assigmentSVC:AssignmentsService) 
  { 
  }

  ngOnInit() {
  }

  getAssignments(){
    return this.assigmentSVC.getAssignments();
  }

}
