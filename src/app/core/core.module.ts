import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Person Imports
import { PersonsPage } from '../pages/persons/persons.page';
import { PersonComponent } from './components/person/person.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PersonsPageRoutingModule } from '../pages/persons/persons-routing.module';

//Task Imports
import { TasksPage } from '../pages/tasks/tasks.page';
import { TaskComponent } from './components/task/task.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TasksPageRoutingModule } from '../pages/tasks/tasks-routing.module';

//Assignment Import
import { AssignmentsPageRoutingModule } from '../pages/assignments/assignments-routing.module';
import { AssignmentsPage } from '../pages/assignments/assignments.page';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { AssignmentDetailComponent } from './components/assignment-detail/assignment-detail.component';
import { PersonSelectableComponent } from './components/person-selectable/person-selectable.component';
import { TaskSelectableComponent } from './components/task-selectable/task-selectable.component';

@NgModule({
  declarations: [TasksPage, TaskComponent ,TaskDetailComponent, PersonsPage, PersonComponent, PersonDetailComponent, AssignmentsPage, AssignmentComponent, AssignmentDetailComponent, PersonSelectableComponent, TaskSelectableComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    // PersonsPageRoutingModule,
    // TasksPageRoutingModule,
    // AssignmentsPageRoutingModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PersonDetailComponent,
    IonicModule,
    TaskComponent,
    PersonComponent,
    TaskDetailComponent,
    AssignmentDetailComponent,
    AssignmentComponent,
    PersonSelectableComponent
  ]
})
export class CoreModule { 
  
}
