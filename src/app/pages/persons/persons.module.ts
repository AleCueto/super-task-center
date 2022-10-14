import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonsPageRoutingModule } from './persons-routing.module';

import { PersonsPage } from './persons.page';

import { PersonComponent } from 'src/app/components/person/person.component';
import { PersonDetailComponent } from 'src/app/components/person-detail/person-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PersonsPage, PersonComponent, PersonDetailComponent]
})
export class PersonsPageModule {}
