import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentsPage } from './assignments.page';
import {ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: AssignmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule,],
  exports: [RouterModule],
})
export class AssignmentsPageRoutingModule {}
