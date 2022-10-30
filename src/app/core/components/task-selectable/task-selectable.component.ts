import { Component, forwardRef, OnInit } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Task } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';


export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TaskSelectableComponent),
  multi: true
};
@Component({
  selector: 'app-task-selectable',
  templateUrl: './task-selectable.component.html',
  styleUrls: ['./task-selectable.component.scss'],
  providers: [USER_PROFILE_VALUE_ACCESSOR]
})
export class TaskSelectableComponent implements OnInit {


  selectedTask = null;

  constructor(
    private taskSVC:TasksService
  ) { }


  ngOnInit() {}

  getTasks(){
    return this.taskSVC.getTasks();
  }

  onTaskClicked(task:Task, accordion:IonAccordionGroup){
    this.selectedTask = task;
    accordion.value='';
    this.propagateChange(this.selectedTask.id);
  }

  //propagate changes into the custom form control
  propagateChange = (_: any) => { }

  //From ControlValueAccessor interface
  writeValue(value: any) {
      this.selectedTask = this.taskSVC.getTasksById(value);
      console.log("eferf");
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
      this.propagateChange = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {

  }
}
