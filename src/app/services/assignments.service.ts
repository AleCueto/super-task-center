import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignments.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  public assignmets:Assignment[] = [
    {
      id:1,
      id_person:1,
      id_task:1,
      dateTime:"ferfwfw",
      created_at:"rggwge"
    },
    {
      id:2,
      id_person:2,
      id_task:2,
      dateTime:"rggeggeg",
      created_at:"yhtjtyj"
    }
  ]

  id:number = this.assignmets.length+1;
  constructor() {

  }

  public getAssignmentById(id:number):Assignment{
    return this.assignmets[id];
  }

  public getAssignments(): Assignment[]{
    return this.assignmets;
  }

  addAssignment(assignment:Assignment){
    assignment.id = this.id++;
    this.assignmets.push(assignment);
  }

  public updateAssignment(assignment:Assignment){
    
    var _assignment = this.assignmets.find(p=>p.id==assignment.id);
    if(_assignment){
      _assignment.id_person = assignment.id_person;
      _assignment.id_task = assignment.id_task;
      _assignment.dateTime = assignment.dateTime;
    }
  }

  deleteAssignmentById(id:number){
    this.assignmets = this.assignmets.filter(p=>p.id != id); 
  }


}
