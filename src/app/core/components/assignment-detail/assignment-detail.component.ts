import { Component,Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Assignment } from 'src/app/core/models/assignments.model';
import { AssignmentsService } from 'src/app/core/services/assignments.service';
import { CoreModule } from '../../core.module';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss'],
})
export class AssignmentDetailComponent implements OnInit {
  
  // assignments: Assignment;
  form:FormGroup;

  mode:"New" | "Edit" = "New";
  @Input('assignment') set assignment(assignment:Assignment){
    if(assignment){
        this.form.controls.id.setValue(assignment.id);
        this.form.controls.id_person.setValue(assignment.id_person);
        this.form.controls.id_task.setValue(assignment.id_task);
        this.form.controls.dateTime.setValue(assignment.dateTime);
      // this.form.controls.picture.setValue(person.picture);
      this.mode = "Edit";
    }
  }

  constructor(private assignmentSVC: AssignmentsService, private fb:FormBuilder, private modal:ModalController) {
    this.form = this.fb.group({
        id:[null],
        id_person:['', [Validators.required]],
        id_task:['', [Validators.required]],
        dateTime:[,]
    });

  }

  ngOnInit() {
  }

  createAssignment(){
    console.log(this.form.value); //It is called when push the form button
  }


  onSubmit(){
    console.log(this.form.value)
    this.modal.dismiss({assignment: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

  getAssignment(): Assignment[] {
    return this.assignmentSVC.getAssignments();
  }

}
