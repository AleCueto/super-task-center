import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonsPage } from './persons.page';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PersonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class PersonsPageRoutingModule {}
