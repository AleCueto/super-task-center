import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignmentsPageRoutingModule } from './assignments-routing.module';

import { AssignmentsPage } from './assignments.page';

import { AssignmentComponent } from 'src/app/components/assignment/assignment.component';
import { AssignmentDetailComponent } from 'src/app/components/assignment-detail/assignment-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignmentsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AssignmentsPage, AssignmentComponent, AssignmentDetailComponent]
})
export class AssignmentsPageModule {}
