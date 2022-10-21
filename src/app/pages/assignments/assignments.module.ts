import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignmentsPageRoutingModule } from './assignments-routing.module';

import { AssignmentsPage } from './assignments.page';
import { AssignmentComponent } from 'src/app/components/assignment/assignment.component';
import { AssignmentsService } from 'src/app/services/assignments.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignmentsPageRoutingModule,
    
  ],
  declarations: [AssignmentsPage, AssignmentComponent]
})
export class AssignmentsPageModule {}
