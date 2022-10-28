import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models/task.model';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from 'src/app/core/services/tasks.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {
  tasks: Task;
  form:FormGroup;

  mode:"New" | "Edit" = "New";
  @Input('task') set task(task:Task){
    if(task){
      this.form.controls.id.setValue(task.id);
      this.form.controls.name.setValue(task.name);
      this.form.controls.description.setValue(task.description);
      this.form.controls.timeInSeconds.setValue(task.timeInSeconds);
      // this.form.controls.picture.setValue(person.picture);
      this.mode = "Edit";
    }
  }
  constructor(private taskSVC:TasksService, private fb:FormBuilder, private modal:ModalController) { 
    this.form = this.fb.group({
      id:[null],
      name:['', [Validators.required]],
      description:['', [Validators.required]],
      timeInSeconds:['', [Validators.required]],
    });


  }

  ngOnInit() {}

  createTask(){
    console.log(this.form.value); //It is called when push the form button
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  onSubmit(){
    this.modal.dismiss({task: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

  getPeople(): Task[] {
    return this.taskSVC.getTasks();
  }
}
