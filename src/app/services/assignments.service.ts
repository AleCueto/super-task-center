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
  constructor() {

  }

  public getAssignmentById(id:number):Assignment{
    return this.assignmets[id];
  }

  public getAssignments(): Assignment[]{
    return this.assignmets;
  }


}
