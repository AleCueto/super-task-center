import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/core/services/tasks.service';
TasksService;
import { Task } from 'src/app/core/models/task.model';
import { PersonComponent } from 'src/app/core/components/person/person.component';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

import { TaskDetailComponent } from 'src/app/core/components/task-detail/task-detail.component';

import { AlertController, ModalController } from '@ionic/angular';
import { AssignmentsService } from 'src/app/core/services/assignments.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  task: Task;
  form:FormGroup;

  constructor(
    private taskService: TasksService,
    private fb:FormBuilder,
    private modal:ModalController,
    private alert:AlertController,
    private assyngSvc:AssignmentsService
    ) {
    this.form = this.fb.group({
      name:'',
      description:''
    });
    }

  ngOnInit() {
  }

  async presentTaskForm(task:Task){
    const modal = await this.modal.create({
      component:TaskDetailComponent,
      componentProps:{
        task:task
      }
    });

    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.taskService.addTask(result.data.task);
            break;
          case 'Edit':
            this.taskService.updateTask(result.data.task);
            break;
          default:
        }
    }
  });
  }

  getTasks(){
    return this.taskService.task$;
  }


  onNewTask(){
    this.presentTaskForm(null);
  }

  onEditTask(task){
    this.presentTaskForm(task);
  }


  async onDeleteAlert(task){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar a la persona?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.taskService.deleteTaskById(task.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeleteTask(task){

    if(!this.assyngSvc.getAssignmentById(task.id))
    this.onDeleteAlert(task);
    else
    this.onTaskExistsAlert(task);
  
}

  async onTaskExistsAlert(task){
    const alert = await this.alert.create({
      header: 'Error',
      message: "La tarea que desea borrar está asignada. Quite la asignación.",
      buttons: [
        {
          text: 'Cerrar',
          role: 'close',
          handler: () => {
          },
        },
      ],
    });
  
    await alert.present();
  }

}
